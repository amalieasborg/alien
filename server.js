const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const alienRoutes = require('../../routes/alienRoutes');
const path=require('path');
require('dotenv').config();
const app = express();

mongoose.connect('mongodb://localhost:27017/alien', {connectTimeoutMS: 10000 })
    .then(()=>console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));



//Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.listen(4000, ()=>console.log('Server running on http://localhost:4000'));