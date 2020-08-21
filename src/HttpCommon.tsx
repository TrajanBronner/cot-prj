import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-type': 'application/json',
    },
});

export default axiosInstance;
