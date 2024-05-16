import axios from 'axios';

const axiosInstance = axios.create({

  //server api

//   baseURL: 'http://43.204.92.123:4005/hrms_api', 

//local api

  baseURL: 'https://hrms-backend-r7ob.onrender.com', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance