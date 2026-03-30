import api from "./api"

export const generateOutfitAPI = (payload) => {
    return api.post('/api/outfit/generate-outfit/',payload);
}
export const saveOutfitAPI = (generated_outfit_id) => {
    return api.put(`/api/outfit/select-outfit/${generated_outfit_id}`);
}