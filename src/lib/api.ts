import axios from 'axios'
const api = axios.create({
    baseURL: 'https://backend-astro-w422.onrender.com'
})

export default api