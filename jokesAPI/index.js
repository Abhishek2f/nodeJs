import express from "express";
import bodyParser from "body-parser";
import axios from 'axios';


const app = express();
const PORT = 3000;
const apiUrl = "https://v2.jokeapi.dev/";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", async(req, res)=>{
    const param ={
        lang: 'en',
        format: 'txt'
    };
    try{
        const resp = await axios.get(apiUrl + 'joke/Any', {
            params: param
        });
    
        console.log(resp.data);
        res.render('index.ejs', {data : resp.data});
    }catch(error){
        console.log("error while getting joke : ", error.message);
    }


})


//server listner
app.listen(PORT, ()=>{
    console.log("app is running on Port ", PORT)
})
