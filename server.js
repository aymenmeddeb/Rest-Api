const express=require('express');
const app=express();
require('dotenv').config();
const ConnectDB=require('./config/connectDB');
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());


app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

const indexRouter=require('./routes/index') 

app.use('/contact',indexRouter);
 

app.listen(process.env.PORT,(err)=>{
    if(err){console.log(error)}
    {console.log('server is running')}
});