import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "content-Type": "multipart/form-data",
  },
});

api.interceptors.request.use((req) => {
  if (localStorage.getItem("access_token")) {
    req.headers.Authorization =
      "Bearer " + localStorage.getItem("access_token");
  }
  return req;
});

export default api;

export const addPost = (postDescription, postImage, user, passion) => {
  return api
    .post("/posts/", {
      postDescription,
      postImage,
      user,
      passion,
    })
    .then((response) => {
      return response.data;
    });
};

export const getPostByUserId = (userId) => {
  return api.get("/posts/user/" + userId).then((response) => {
    return response.data;
  });
};

export const getAllPost = () => {
  return api.get("/posts/all").then((response) => {
    return response.data;
  });
};

export const addPassion = (passionName, passionDescription, passionImage,creator) => {
    return api.post('/passions/', {
        passionName,
        passionDescription,
        passionImage,
        creator,
    }).then(response => {
        return response.data
    })
}

export const getAllPassions = () => {
  return api.get("/passions/").then((response) => {
    return response.data;
  });
};

export const getPassionById = (idPassion) => {
  return api.get("/passions/" + idPassion).then((response) => {
    return response.data;
  });
};

export const getPassionName = (idPassion) => {
  return api.get("/passions/" + idPassion).then((response) => {
    return response.data.passionName;
  });
};

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
  return api.delete("/passions/" + idPassion).then((response) => {
    return response.data;
  });
};

export const getAllEvents = () => {
  return api.get("/events/").then((response) => {
    return response.data;
  });
};

export const getEvent = (idEvent) => {
  return api.get("/events/" + idEvent).then((response) => {
    return response.data;
  });
};
export const addEvent = (
  eventName,
  coverPhoto,
  startDate,
  endDate,
  startTime,
  endTime,
  location,
  description,
  user,
  passion
) => {
  return api
    .post("/events/", {
      eventName,
      coverPhoto,
      startDate,
      endDate,
      startTime,
      endTime,
      location,
      description,
      user,
      passion,
    })
    .then((response) => {
      return response.data;
    });
};
export const addArticle = (
  articleName,
  articleContent,
  articleImage,
  user,
  passion
) => {
  return api
    .post("/articles/", {
      articleName,
      articleContent,
      articleImage,
      user,
      passion,
    })
    .then((response) => {
      return response.data;
    });
};

export const getUser = () => {
  return api.get("/users/").then((response) => {
    return response.data;
  });
};

export const likeArticle = async (id) => {
  try {
    return await api.patch("/articles/" + id + "/likes").then((response) => {
      return response.data;
    });
  } catch (error) {
    console.log("Erreur lors de la récuperation des données");
  }
};

export const addNotification = async (message, sender, receiver, is_read) => {
  try {
    return await api
      .post("/notifications/", {
        message,
        sender,
        receiver,
        is_read,
      })
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.log("Erreur lors de la récuperation des données");
  }
};
