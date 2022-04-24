import axios from 'axios';

export const request = axios.create({
    baseURL: "https://qrankin.com/api",
    headers: {
        Authorization: 'Token ' + process.env.REACT_APP_TOKEN,
    }
})

