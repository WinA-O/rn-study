import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/top_rated",
    params: { api_key: "api_key=524a130893027ea4aebef3cd951b1caa", language: 'un-US'}
});

export const movies = {
    getPopular: () => api.get("movie/popular"),
    getNowPlaying: () => api.get("movie/now_playing")
};