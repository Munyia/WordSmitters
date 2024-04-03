const express = require('express');
const cors = require('cors');


const app = express();
const port = 4000;

// const countries ={
//     "Afghanistan":"Afghanistan",
//     "Albania":"Albania",
//     "Algeria":"Algeria",
//     "Andorra":"Andorra",
//     "Angola":"Angola",
//     "Antigua and Barbuda":"Antigua and Barbuda",
//     "Argentina":"Argentina",
//     "Armenia":"Armenia",
//     "Australia":"Australia",
//     "Austria":"Austria",
//     "Azerbaijan":"Azerbaijan",
//     "Bahamas":"Bahamas",
//     "Bahrain":"Bahrain",
//     "Bangladesh":"Bangladesh",
//     "Barbados":"Barbados",
//     "Belarus":"Belarus",
//     "Belgium":"Belgium",
//     "Belize":"Belize",
// }
// app.use(
//     cors({
//         origin: 'http://localhost:5173', 
//     })
// )

app.get('/countries', (req, res) => {
    res.send(countries);  
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

