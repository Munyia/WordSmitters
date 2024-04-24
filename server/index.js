import express from 'express';
import cors from 'cors';
import connectdb from './utils/db.js';
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import bookRoutes from "./routes/bookRoutes.js"

const app = express();
const port = 8081;
dotenv.config();
connectdb();

app.use(
    cors({
        origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175']
    })
)
app.use(express.json())
app.use('/users', userRoutes)
app.use('/books', bookRoutes)

app.get('/', (req, res) => {
    res.send("Mudijo");  
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

