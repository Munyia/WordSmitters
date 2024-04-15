import express from 'express';
import cors from 'cors';
import connectdb from './db.js';
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"

const app = express();
const port = 8081;
dotenv.config();
connectdb();

app.use(
    cors({
        origin: 'http://localhost:5173', 
    })
)
app.use(express.json())
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.send("Mudijo");  
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

