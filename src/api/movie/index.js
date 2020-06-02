import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";

const API = "d1f867f141558abd4dfcd4f09b45f4fc";

export const latest = async () => {
  try {
    const { data } = await axios.get(`/latest?api_key=${API}&language=en-US`);
    return data;
  } catch (error) {
    console.log(error, error.response);
  }
};

export const nowPlaying = async (pageNumber) => {
  try {
    const { data } = await axios.get(
      `/now_playing?api_key=${API}&language=en-US&page= ${pageNumber}`
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const popular = async (pageNumber) => {
  try {
    const { data } = await axios.get(
      `/popular?api_key=${API}&language=en-US&page=${pageNumber}`
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const toprated = async (pageNumber) => {
  try {
    const { data } = await axios.get(
      `/toprated?api_key=${API}&language=en-US&page=${pageNumber}`
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const upcoming = async (pageNumber) => {
  try {
    const { data } = await axios.get(
      `/upcoming?api_key=${API}&language=en-US&page=${pageNumber}`
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const images = async (movieId) => {
  try {
    const { data } = await axios.get(
      `/${movieId}/images?api_key=${API}&language=en-US&include_image_language=en,null`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const details = async (movieId) => {
  try {
    const { data } = await axios.get(
      `/${movieId}?api_key=${API}&language=en-US`
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const credits = async (movieId) => {
  try {
    const { data } = await axios.get(`/${movieId}/credits?api_key=${API}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const recommendations = async (movieId, page) => {
  try {
    const { data } = await axios.get(
      `/${movieId}/recommendations?api_key=${API}&language=en-US&page=${page}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
