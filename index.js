const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', require('./routes/users'));

app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`)
})

