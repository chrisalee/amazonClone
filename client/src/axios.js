import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-20d6d.cloudfunctions.net/api'  //THE API (cloud function) URL
    // local http://localhost:5001/challenge-20d6d/us-central1/api  //LOCAL API testing
});

export default instance;

