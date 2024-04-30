import express from 'express';
import path from 'path';
import cors from 'cors';
import connectdb from './utils/db.js';
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from "./routes/userRoutes.js"
import bookRoutes from "./routes/bookRoutes.js"

const app = express();
dotenv.config();
const port = process.env.PORT || 5001;
connectdb();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    cors({
        origin: ["https://word-smitters.vercel.app", 'http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175' ],
        credentials: true,
  
    })
  )
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes)
if (process.env.NODE_ENV !== 'development') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }
  
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

