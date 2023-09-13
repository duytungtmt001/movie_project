import axios from 'axios';

const request = axios.create({
    // baseURL: 'http://localhost:3000/',
    baseURL: 'https://5d7rs4-3000.csb.app/',
    timeout: 2000
});

export default request;
