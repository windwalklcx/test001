const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');

const app=express();
app.listen(10086);
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));

app.use("/user",userRouter);

