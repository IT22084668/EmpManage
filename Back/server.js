const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());


const uri ='mongodb+srv://kk:kk2002@protonsdb.zcrftue.mongodb.net/protonsDB?retryWrites=true&w=majority';

const connect = async () =>{
    try{
        await mongoose.connect(uri);
        console.log('Connected to mongoDB !!..');
    }
    catch(error) {
        console.log('MongoDB Error: ', error);
    } 
};
connect();

const server = app.listen(3001, 'localhost', () =>{
    console.log(`Node server is run on ${server.address().port}`)
});

app.use('/api', router);