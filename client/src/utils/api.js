import axios from "axios";

const api = axios.create({
    baseURL:"https://wordsmitters.onrender.com",
    withCredentials: true
    // https://wordsmitters.onrender.com/
})

export default api