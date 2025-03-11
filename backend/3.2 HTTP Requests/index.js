import express from 'express';

const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`);
});

app.get('/', (req, res)=>{
    console.log(req);
    res.send("hello new nodejs");
})
app.get('/contact', (req, res)=>{
    res.send("<h1>This is my Phone number : 8390909448</h1>");
});

app.get('/about', (req, res)=>{
    res.send("This is Abhishek Kumar Dwivedi");
});