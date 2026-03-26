import api from "./api"

export const fetchItemsAPI = (params) =>{
    return api.get('/api/clothes/get-wardrobe/',{params});
}
export const uploadItemAPI = (formData) =>{
    return api.post('/api/clothes/upload-cloth/',formData);
}

export const deleteItemAPI = (itemId) =>{
    return api.delete(`/api/clothes/delete-cloth/${itemId}`);
}

export const fetchOverViewAPI = () =>{
    return api.get('/api/dashboard/summary/');
}