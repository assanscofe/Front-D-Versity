import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'content-Type': 'application/json',
    }
});

export default api;

export const addPassion = (passionName, passionDescription, passionImage) => {
    return api.post('/passions/', {
        passionName,
        passionDescription,
        passionImage,
    }).then(response => {
        return response.data
    })
}
export const getAllPassions = () => {
    return api.get('/passions/').then(response => {
        return response.data
    })
}
export const getPassion = (idPassion) => {
    return api.get('/passions/' + idPassion).then(response => {
        return response.data
    })
}
export const updatePassion = (idPassion) => {
    return api.put('/passions/' + idPassion).then(response => {
        return response.data
    })
}
export const deletePassion = (idPassion) => {
    return api.delete('/passions/' + idPassion).then(response => {
        return response.data
    })
}

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