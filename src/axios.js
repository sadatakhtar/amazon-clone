import axios from 'axios';

const instance = axios.create({
    baseURL: '...' //API URL here (cloud function)
})

export default instance;