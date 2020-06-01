import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";

const API = "d1f867f141558abd4dfcd4f09b45f4fc";

const LATEST_URL = `/latest?api_key=${API}&language=en-US`;

export const latest = async () => {
  try {
    const { data } = await axios.get(LATEST_URL);
    return data;
  } catch (error) {
    console.log(error, error.response);
  }
};

export const nowPlaying = async (pageNumber) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d1f867f141558abd4dfcd4f09b45f4fc&language=en-US&page=" +
        pageNumber
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const popular = async (pageNumber) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d1f867f141558abd4dfcd4f09b45f4fc&language=en-US&page=" +
        pageNumber
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const toprated = async (pageNumber) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/toprated?api_key=d1f867f141558abd4dfcd4f09b45f4fc&language=en-US&page=" +
        pageNumber
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const upcoming = async (pageNumber) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=d1f867f141558abd4dfcd4f09b45f4fc&language=en-US&page=" +
        pageNumber
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const images = async (movieId) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/images?api_key=d1f867f141558abd4dfcd4f09b45f4fc&language=en-US&include_image_language=en,null"
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const details = async (movieId) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=d1f867f141558abd4dfcd4f09b45f4fc&language=en-US`
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const credits = async (movieId) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d1f867f141558abd4dfcd4f09b45f4fc`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const recommendations = async (movieId, page) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=d1f867f141558abd4dfcd4f09b45f4fc&language=en-US&page=${page}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
