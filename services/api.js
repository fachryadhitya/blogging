import axios from "axios";

const BASE_URL = "http://localhost:3001";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const getAllNews = async () => {
  const res = await axios.get(`${BASE_URL}/data`);
  const data = await res.data;
  return data;
};

export const getNewsDetail = async (id) => {
  const res = await axios.get(`${BASE_URL}/data/${id}`);
  const data = await res.data;
  return data;
};

export const createNews = async (title, imageLink, paragraph) => {
  const res = await axios.post(`${BASE_URL}/data`, {
    title,
    imageLink: imageLink || "https://wallpaperaccess.com/full/30100.jpg",
    paragraph,
    Date: new Date().toLocaleDateString(undefined, options),
  });
  const data = await res.data;
  return data;
};

export const getAllUser = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  const data = await res.data;
  return data;
};

export const userRegister = async (email, password) => {
  const res = await axios.post(`${BASE_URL}/users`, {
    email,
    password,
  });
  const data = await res.data;
  return data;
};
