import express from 'express';
const app = express();
app.get('/users',(req,res)=>{
    res.send('Hello, This is from backend!\n');
});
app.get('/get-users',(req,res)=>{
    res.send('Hello!\n');
});
app.listen(7007,()=>{
    console.log('Server running at port 7007');
})