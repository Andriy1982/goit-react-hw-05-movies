import axios from 'axios';

const KEY = '81f248d3c9154788229a5419bb33091a';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: KEY,
};

const getMovies = async () => {
  try {
    const response = await axios.get('trending/all/day?');
    return response.data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMoviesById = async bookId => {
  try {
    const response = await axios.get(`movie/${bookId}`);
    return response.data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieCast = async bookId => {
  try {
    const response = await axios.get(`movie/${bookId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieReviews = async bookId => {
  try {
    const response = await axios.get(`movie/${bookId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getSearchMovies = async searchMovie => {
  try {
    const response = await axios.get(`search/movie?query=${searchMovie}`);
    return response.data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const API = {
  getMovies,
  getMoviesById,
  getMovieCast,
  getSearchMovies,
  getMovieReviews,
};

export default API;
