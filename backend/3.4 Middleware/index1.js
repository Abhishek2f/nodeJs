import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
//middleware
app.use(bodyParser.urlencoded({extended: true }));
app.use(morgan('combined'));//tiny - gives less content on log

app.post('/submit', (req, res)=>{
  console.log(req.body)
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
