import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'content-Type': 'application/json',
    }
});

export const LoginUser = (username, password) => {

    return api.post('/login/', {
        username,
        password,
    }).then(response => {
        return response.data;
    })
};

export const getUser = () => {
    return api.get('/users/').then(response => {
        return response.data;
    })
}