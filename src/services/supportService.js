import api from "./api"

export const InquiryAPI = (data) =>{
    return api.post('/api/support/submit/',data);
}   