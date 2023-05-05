import axios from "axios";

const API_URL: string | any = process.env.NEXT_BASE_URL;

export const http = () => {
  return axios.create({
    baseURL: API_URL,
  });
};
