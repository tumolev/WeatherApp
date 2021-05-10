/* eslint-disable no-console */
import axios from 'axios';

export const API_URL  = 'https://api.openweathermap.org/data/2.5/';
axios.defaults.baseURL = API_URL;

export default axios;
