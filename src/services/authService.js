import api from "./api";

export const registerUser = async (userData) => {
    const response = await api.post('/api/auth/signup', userData, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    return response.data
}

export const loginUser = async (credentials) => {
    const responce = await api.post('/api/auth/login', credentials)
    return responce.data
}

export const getMe = async () => {
    const responce = await api.get('/api/profile/get-profile')
    return responce.data
}

export const logoutUser = async () => {
    const responce = await api.post('/api/auth/logout')
    return responce.data
}