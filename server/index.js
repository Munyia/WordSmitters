const express = require('express');
const cors = require('cors');
const connectdb = require('./db');
const dotenv = require('dotenv');
const User = require("./model/userModel");


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
app.get("/addUser", (req, res) => {
    const newUser = new User({email});
    const addUser = newuser.save()
    newUser.save((err, user) => {
      
    })
})

app.use(
    cors({
        origin: 'http://localhost:5173', 
    })
)
app.use(express.json())

app.get('/', (req, res) => {
    res.send("I live suckers");  
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

