import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "1c5ee19b4d67ab2d34835d17922369fa",
    language: "ko-kr",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("/movie/now_playing"),
  popular: () => api.get("/movie/popular"),
  topRated: () => api.get("/movie/top_rated"),
};
