import Axios from 'axios';

export const axios = Axios.create({
  // baseURL: `http://10.93.0.120:8000/api/`,
  baseURL: `https://backend-4.w2025.deployed.space/api/`,
});
