import axios, { AxiosResponse } from "axios";

const myId = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

axios.defaults.baseURL = `https://api.unsplash.com`;

export const fetchImage = async <T>(
  search: string,
  page: number
): Promise<T> => {
  try {
    const { data }: AxiosResponse<T> = await axios.get(
      `/search/photos?query=${search}&per_page=12&page=${page}`,
      {
        headers: {
          Authorization: `Client-ID ${myId}`,
        },
      }
    );

    return data;
  } catch (err) {
    throw err;
  }
};
