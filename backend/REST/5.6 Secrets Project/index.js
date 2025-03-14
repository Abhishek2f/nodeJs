// HINTS:
// 1. Import express and axios
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';


const PORT = 3000
const API_URL = "https://secrets-api.appbrewery.com/";
var apiResp = {};
// 2. Create an express app and set the port number.
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// 3. Use the public folder for static files.
app.use(express.static('public'));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get('/', (req, res)=>{
    async function funcall(req, res){
    console.log("start");
    const resp = await axios(API_URL + 'random');
    console.log("middle");
    res.render('index.ejs', {secret : resp.data.secret, username: resp.data.username});
    console.log("end");}
    console.log("Start get fun");
    funcall(req, res);
    console.log("End get fun");
})
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(PORT, ()=>{
    console.log("server is running on port 3000");
});
