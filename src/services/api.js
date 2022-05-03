import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '092a845a33f61eebb0542bc73fc3415f';
// const URL = 'https://api.themoviedb.org/3';

export const fetchGetTrending = () => {
  return axios.get(`trending/movie/day?api_key=${KEY}`);
};
