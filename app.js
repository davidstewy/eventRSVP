const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
mongoose.connect('mongodb://localhost:27017/rsvp');

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));

app.set('views', './views')
app.set('view engine', 'pug');

app.get('/', (req, res) =>{

});




app.listen(3000, () => console.log('workin server'));