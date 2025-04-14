import axios from "axios";

const token = sessionStorage.getItem('token');

const api = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        'Authorization': `Bearer ${token}`
    }
}) 

export default api