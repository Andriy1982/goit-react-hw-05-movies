import axios from 'axios';

const KEY = '81f248d3c9154788229a5419bb33091a';
const BASE_URL = 'https://api.themoviedb.org/3/';

//api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: KEY,
};

const getMovies = async () => {
  try {
    const response = await axios.get('trending/all/day?');
    // const data =
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const getMoviesById = async bookId => {
  try {
    const respons = await axios.get(`movie/${bookId}`);
    return respons.data;
  } catch (error) {
    console.log(error);
  }
};

const getMoviesByCast = async bookId => {
  try {
    const respons = await axios.get(`movie/${bookId}/credits`);
    return respons.data;
  } catch (error) {
    console.log(error);
  }
};

const getMoviesByReviews = async bookId => {
  try {
    const respons = await axios.get(`movie/${bookId}/reviews`);
    return respons.data;
  } catch (error) {
    console.log(error);
  }
};

const getSearchMovies = async searchMovie => {
  try {
    const respons = await axios.get(`search/movie?query=${searchMovie}`);
    return respons.data.results;
  } catch (error) {
    console.log(error);
  }
};

const API = {
  getMovies,
  getMoviesById,
  getMoviesByCast,
  getSearchMovies,
  getMoviesByReviews,
};

export default API;

// async function fetchWithErrorHandling(url = '', config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }

// export function fetchAuthors() {
//   return fetchWithErrorHandling(`${BASE_URL}/authors?_embed=books`);
// }

// export function fetchBooks() {
//   return fetchWithErrorHandling(`${BASE_URL}/books`);
// }

// export function fetchBookById(bookId) {
//   return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`);
// }
