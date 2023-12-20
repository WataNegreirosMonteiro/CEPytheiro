import axios from 'axios';

const apiOpenCage = axios.create({
    baseURL: 'https://api.opencagedata.com/geocode/v1/json?q='
});

export default apiOpenCage;