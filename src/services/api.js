import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'content-Type': 'multipart/form-data',
    }
});

export default api;

export const addPost = (postDescription,postImage, user, passion) => {
    return api.post('/posts/', {
        postDescription,
        postImage,
        user,
        passion,
    }).then(response => {
        return response.data
    })
}

export const getPostByUserId = (userId) => {
    return api.get('/posts/user/' + userId).then(response => {
        return response.data
    })
}

export const getAllPost = () => {
    return api.get('/posts/').then(response => {
        return response.data
    })
}

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