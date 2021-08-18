import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-76120.cloudfunctions.net/api' //API URL here (cloud function)
})

export default instance;


//http://localhost:5001/clone-76120/us-central1/api