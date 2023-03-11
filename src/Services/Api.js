import axios from "axios"

export const getMemes = async() => {
    const API_URL = 'https://www.reddit.com/r/memes.json';

    try {
        const response = await axios.get(API_URL) 
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}