import api from "./api";

export const fetchHistory = async () => {
  const response = await api.get("/api/outfit-history/my-history");
  return response.data;
};
