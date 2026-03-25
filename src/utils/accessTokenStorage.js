const KEY = 'aura_token'

export const getToken = () =>
    localStorage.getItem(KEY) || sessionStorage.getItem(KEY)

export const setToken = (token, remember = false) => {
    if (remember) {
        localStorage.setItem(KEY, token)
    } else {
        sessionStorage.setItem(KEY, token)
    }
}

export const removeToken = () => {
    localStorage.removeItem(KEY)
    sessionStorage.removeItem(KEY)
}