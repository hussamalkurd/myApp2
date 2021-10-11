import axios from 'axios';
import baseUrl from './baseApiUrl';
import {store} from '../../redux';

const ApiClient = axios.create({
  baseURL: baseUrl,
  responseType: 'json',
});

// ApiClient.interceptors.request.use(
//   function (config) {
//     const {isLoggedIn, jwt} = store.getState().auth;
//     if (isLoggedIn) {
//       config.headers['Authorization'] = 'Bearer ' + jwt;
//     } else {
//       delete config.headers['Authorization'];
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );

export default ApiClient;
