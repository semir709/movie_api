import axios from "axios";

const BASE_URL = "https://moviesdatabase.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com'",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export const fetchFromApiAll = async (...url) => {
  const data = await axios.all(
    url.map((endpoint) => axios.get(`${BASE_URL}/${endpoint}`, options))
  );

  return data;
};

export const caculateRating = (prev, ratingsSummary) => {
  const score = Math.round(ratingsSummary?.aggregateRating / 2);
  const result = prev.map((val, index) => {
    if (index < score) {
      return 1;
    } else return 0;
  });
  return result;
};
