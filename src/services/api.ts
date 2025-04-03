import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coincap.io/v2/assets",
});

export const getBitcoinData = async () => {
  try {
    const response = await api.get("/bitcoin");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do Bitcoin:", error);
    return null;
  }
};
