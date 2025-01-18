import axios from "axios";

const myId = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

axios.defaults.baseURL = `https://api.unsplash.com/`;

export const fetchImage = async (search) => {
  const response = await axios.get(`/search/photos?query=${search}`, {
    headers: {
      Authorization: `Client-ID ${myId}`,
    },
  });
  return response.data;
};
