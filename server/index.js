const express = require('express');
const cors = require('cors');


const app = express();
const port = 5174;


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
]

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

