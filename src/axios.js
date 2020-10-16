import axios from "axios";

// Base URL for TMDB
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default instance;
