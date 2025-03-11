//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from 'body-parser';

const dir = process.cwd();
const app = express();
const port = 3000;
var isValid = false
function checkpassword(req, res, next){
    isValid = false;
    if (req.body.password == 'a'){
        isValid = true;
        console.log(`in checkpassword isValid= ${isValid}`)
    }
    next();
}

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(checkpassword)

app.listen(port, ()=>{
    console.log(`server is running on : ${port}`);
});

app.get('/', (req, res)=>{
    res.sendFile(dir + '/public/index.html');
});

app.post('/check', (req, res)=>{
    let responseUrl = dir
    console.log(`isValid = ${isValid}`)
    if(isValid == true){
        responseUrl = responseUrl + '/public/secret.html';
    }else{
        responseUrl = responseUrl + '/public/index.html';
    }
    res.sendFile(responseUrl);
})

app.post('/back', (req, res)=>{
    res.sendFile(dir + '/public/index.html');
});