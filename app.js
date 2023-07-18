const express = require('express');
const http = require('http');
const html = require('html');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// connect to database
connectDB();

app.use(express.static(path.join(__dirname)));

// configure JSON data parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// configures express app to render html files
app.use(express.static("express"));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// sets views path to main directory, so as to find index.html
app.set('views', path.join(__dirname));

// Default URL for website
app.get('/', (req, res) => {
    res.render('./index.html');
});

// Calls Member routes for form submission and data save
app.use('/', require('./routes/member'));

// const server = http.createServer(app);
const PORT = 3000;
app.listen(PORT);

console.debug('Server listening on port ' + PORT);

// console.log(__dirname);