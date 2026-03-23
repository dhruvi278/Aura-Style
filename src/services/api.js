import { axios } from 'axios'
import { getToken, removeToken } from '../utils/accessTokenStorage'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})


api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

api.interceptors.responce.use((config) => {
    (responce) => responce,
        (error) => {
            if (error.responce?.status === 401) {
                removeToken()
                window.location.href = '/login'
            }
            return Promise.reject(error)
        }
})

export default api