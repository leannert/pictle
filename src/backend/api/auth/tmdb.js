import axios from 'axios'

export const getTMDBconfig = async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/configuration?api_key=' + process.env.TMDB_API_KEY)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getTestPoster = async (movieID) => {
    const config = await getTMDBconfig()
    const baseURL = config.images.secure_base_url
    const size = "original"
    try {
        const response = await axios({
            url: "https://api.themoviedb.org/3/movie/"+movieID+"/images?api_key="+process.env.TMDB_API_KEY,
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        const filePath = response.data.posters[0].file_path
        return (baseURL + size + filePath)
    }
    catch (error) {
        console.log(error.response)
    }
}