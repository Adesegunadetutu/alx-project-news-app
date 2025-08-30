import axios from "axios";

const API_KEY = "69851c1eb1c44455a65c2165948b99d4";
const BASE_URL = "https://newsapi.org/v2";

export const fetchNewsByCategory = async (category) => {
  const res = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category,
      country: "us",
      apiKey: API_KEY,
      pageSize: 20,
    },
  });
  return res.data.articles;
};

export const fetchNewsById = async (title) => {
  const res = await axios.get(`${BASE_URL}/everything`, {
    params: {
      q: title,
      apiKey: API_KEY,
    },
  });
  return res.data.articles[0];
};
