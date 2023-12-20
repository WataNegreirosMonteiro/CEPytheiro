import axios from 'axios';

const apiViacep = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

export default apiViacep;