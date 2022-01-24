const mongoose=require('mongoose');

const url="mongodb+srv://ashkriti:ashkriti123@cluster0.9d7yh.mongodb.net/facebook-db?retryWrites=true&w=majority";
mongoose.connect(url,{
    useNewUrlParser:true
 })
//  .then(()=>{
//     console.log("Database Successfully connected");
// }).catch((e)=>{
//     console.log("Database connection failed",e)
// })
.then(res=>{
    console.log("database successfully connected")})
.catch(err=>{
    console.log(err || "database successfully failed")});


