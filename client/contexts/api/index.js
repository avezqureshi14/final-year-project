import axios from "axios"

const API = axios.create({baseURL:"http://localhost:8800/"});

// export const fetchPosts = () => axios.get("https://api.tvmaze.com/search/shows?q=death")
export const fetchPosts = () => axios.get("https://avez-blog-2023-end.onrender.com/blogs")
