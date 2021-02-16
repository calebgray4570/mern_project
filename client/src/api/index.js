import axios from 'axios';

const url = 'http://localhost:5000/posts';
const deployURL = 'https://cgray-mern-project.herokuapp.com/posts';

export const fetchPosts = () => axios.get(deployURL);
export const createPost = (newPost) => axios.post(deployURL, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${deployURL}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${deployURL}/${id}`);
export const likePost = (id) => axios.patch(`${deployURL}/${id}/likePost`);

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);