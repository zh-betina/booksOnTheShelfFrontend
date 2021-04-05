import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://booksontheshelfbackend.herokuapp.com/botsab/'
});

export default instance;