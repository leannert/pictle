import axios from 'axios'

export const getTestPoster = async (movieID) => {
    try {
        const response = await axios({
            url: "https://api.themoviedb.org/3/movie/"+movieID+"/images?api_key="+process.env.TMDB_API_KEY,
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        console.log('url from tmdb ' + response.data.posters[0].file_path)
        return response.data.posters[0].file_path.toString()
    }
    catch (error) {
        console.log(error.response)
    }
}