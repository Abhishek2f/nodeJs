import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url)); // we can use this as well -> const dir = process.cwd()

const app = express();
const port = 3000;
//middleware
app.use(bodyParser.urlencoded({extended: true }));



app.get('/', (req, res)=>{
  res.sendFile(__dirname + "/public/index.html")
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post('/submit', (req, res)=>{
  console.log(req.body)
  res.send(`<h1> your result ${req.body.street} : ${req.body.pet} </h1>`)
})
