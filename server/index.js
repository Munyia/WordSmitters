import express from 'express';
import cors from 'cors';
import connectdb from './db.js';
import User from "./model/userModel.js";
import dotenv from "dotenv"
import userRoutes from "./model/userModel.js"

const app = express();
const port = 8081;
dotenv.config();
connectdb();
const users =[
    {
        "name":"John",
        "email":"john.@gmail.com",
        "password":"qwer"
    },
    {
        "name":"Mary",
        "email":"mary@gmail.com",
        "password":"1234"
    },
    {
        "name":"<Jane>",
        "email":"<jane@gmail.com>",
        "password":"<PASSWORD>"
    },
];

app.post("login", (req, res) => {

});

app.use('/users', userRoutes)

app.use(
    cors({
        origin: 'http://localhost:5173', 
    })
)
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Mudijo");  
});
app.post('/login', (req, res) => {
    const {email, password} = req.body;
    console.log(email)
    const user = users.find(user => user.email == email && user.password == password);
    console.log(email)
    if(user){
        res.send({token:"k;ldsdlsd;"});
    }else{
        res.status(401).send('Invalid credentials');
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

