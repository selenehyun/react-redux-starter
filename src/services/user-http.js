import axios from 'axios';

export const fetchUsersHttp = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
}