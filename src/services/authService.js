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

export const updateProfile = async (profileData) => {
    const formData = new FormData()
 
    // Only append fields that have a value
    if (profileData.full_name)    formData.append('full_name', profileData.full_name)
    if (profileData.phone_number) formData.append('phone_number', profileData.phone_number)
    if (profileData.gender)       formData.append('gender', profileData.gender)
    if (profileData.file instanceof File) formData.append('file', profileData.file)

    const response = await api.put('/api/profile/update-profile', formData)
    console.log(formData);
    
    return response.data
}