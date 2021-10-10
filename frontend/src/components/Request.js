import axios from 'axios';

export const request = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        Authorization: 'Token ' + process.env.REACT_APP_TOKEN,
    }
})

