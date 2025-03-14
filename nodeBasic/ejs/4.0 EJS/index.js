import express from 'express';
import bodyParser from 'body-parser';
const port = 3000;
const app = express();
const today = new Date();
const dayOfWeek = today.toLocaleString('en-US', { weekday: 'long' });
const dayMapping ={ 'Monday': 'work hard!', 'Tuesday' :'Relax!'}
const dir = process.cwd();
var motivation = ''
function getday(req, res, next){
    motivation = dayMapping[dayOfWeek];
    console.log("motivation : ", motivation);
    next();
}

//middleware
app.use(bodyParser.urlencoded({extended: true}));

app.use(getday);

app.get('/', (req, res)=>{
    res.render(dir + '/views/index.ejs',
        {'day': dayOfWeek, 'motivation': motivation}
    );
});


//listener
app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`);
});