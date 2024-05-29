const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/AlienDBex';
const alienRouter = require('./routers/aliens');


const app = express();
const port = 3000;

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...');
});

app.use(express.json());

app.use('/aliens', alienRouter);

app.listen(port, () => {
    console.log('Server started');
});
