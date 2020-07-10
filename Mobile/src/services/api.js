import axios from 'axios';

const api = axios.create({
    baseURL: 'https://find-backend.herokuapp.com/',
});

export default api;