import axios from "axios";
import dotenv from "dotenv"
dotenv.config()

const api = axios.create({
    baseURL: process.env.MODE === "Devlopment" ?"http://localhost:5001/":"https://wordsmitters.onrender.com/",
    withCredentials: true
    
})

export default api