import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'content-Type': 'multipart/form-data',
    }
});

export default api;

export const addPost = (postDescription, postImage, user, passion) => {
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
    return api.get('/posts/all').then(response => {
        return response.data
    })
}


export const addPassion = (passionName, passionDescription, passionImage) => {
    return api.post('/addPassion/', {
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

export const getPassionById = (idPassion) => {
    return api.get('/passions/' + idPassion).then(response => {
        return response.data
    })
}

export const getPassionName = (idPassion) => {
    return api.get('/passions/' + idPassion).then(response => {
        return response.data.passionName
    })
}

export const updatePassion = (idPassion, passionName, passionDescription, passionImage) => {
    return api.put('/passions/' + idPassion, {
        passionName, 
        passionDescription, 
        passionImage
    }).then(response => {
        return response.data
    })
}

export const deletePassion = (idPassion) => {
    return api.delete('/passions/' + idPassion).then(response => {
        return response.data
    })
}

export const getAllEvents = () => {
    return api.get('/events/').then(response => {
        return response.data
    })
}

export const getEvent = (idEvent) => {
    return api.get('/events/' + idEvent).then(response => {
        return response.data
    })
}
export const addEvent = (eventName,coverPhoto,startdate,endDate,startTime,endTime,location,description,user,passion) => {
    return api.post('/events/', {
        eventName,
        coverPhoto,
        startdate,
        endDate,
        startTime,
        endTime,
        location,
        description,
        user,
        passion
    }).then(response => {
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

export const SignUpUser = (email, username, first_name, last_name, password, avatar, background, passions) => {
    return api.post('/signup/', {
        email,
        username,
        first_name,
        last_name,
        password,
        avatar,
        background,
        passions
    }).then(response => {
        return response.data
    })
}

export const getUser = () => {
    return api.get('/users/').then(response => {
        return response.data;
    })
}