import axios from 'axios'

export const getTMDBconfig = async () => {
    try {
        const response = await axios.get(
            'https://api.themoviedb.org/3/configuration?api_key=' +
                process.env.TMDB_API_KEY
        )
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getTestPoster = async (movieID) => {
    const config = await getTMDBconfig()
    const baseURL = config.images.secure_base_url
    const size = 'original'
    try {
        const response = await axios({
            url:
                'https://api.themoviedb.org/3/movie/' +
                movieID +
                '/images?api_key=' +
                process.env.TMDB_API_KEY,
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
        const filePath = response.data.posters[0].file_path
        return baseURL + size + filePath
    } catch (error) {
        console.log(error.response)
    }
}

export const getTopMovies = async (pageNumber) => {
    const config = await getTMDBconfig()
    const baseURL = config.images.secure_base_url
    const size = 'original'
    var movies = []
    try {
        const response = await axios({
            url:
                'https://api.themoviedb.org/3/movie/top_rated?api_key=' +
                process.env.TMDB_API_KEY +
                '&language=en-US&page=' +
                pageNumber,
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
        response.data.results.forEach((movie) => {
            movies.push({
                id: movie.id,
                title: movie.title,
                originalTitle: movie.original_title,
                language: movie.original_language,
                poster: baseURL + size + movie.poster_path,
                releaseDate: movie.release_date,
                overview: movie.overview,
                backdrop: baseURL + size + movie.backdrop_path,
                genres: movie.genre_ids,
            })
        })
        return movies
    } catch (error) {
        console.log(error.response)
    }
}
