import { jwtDecode } from "jwt-decode";

const KEY = "aura_token";

export const getToken = () =>
  localStorage.getItem(KEY) || sessionStorage.getItem(KEY);

export const setToken = (token, remember = false) => {
  if (remember) {
    localStorage.setItem(KEY, token);
  } else {
    sessionStorage.setItem(KEY, token);
  }
};

export const removeToken = () => {
  localStorage.removeItem(KEY);
  sessionStorage.removeItem(KEY);
};

export const getTokenExpiry = () => {
  const token = getToken();
  if (!token) return null;
  try {
    const decode = jwtDecode(token);
    // console.log(decode)
    return decode.exp * 1000;
  } catch {
    return null;
  }
};

export const isTokenExpired = () => {
  const expiry = getTokenExpiry();
  if (!expiry) return true;
  return Date.now() >= expiry;
};

export const getTimeUntilExpiry = () => {
  const expiry = getTokenExpiry();
  if (!expiry) return 0;
  return expiry - Date.now();
};
