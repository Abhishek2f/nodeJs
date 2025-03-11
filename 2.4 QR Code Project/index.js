/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

//inquirer use
import inquirer from "inquirer";
import qr from "qr-image"
import fs from 'fs'
import { error } from "console";
inquirer.prompt([
    {
        message: "type your url",
        name: 'URL'
    }
])
.then((answer)=>{
    console.log(answer);
    const url = answer.URL;
    var qrImg = qr.image(url);
    qrImg.pipe(fs.createWriteStream("qrImage.png"));
    fs.access('url.txt', fs.constants.F_OK, (err)=>{
        console.log(`isExist = ${err}`);
        if(!err){
            fs.readFile('url.txt', 'utf-8', (err, data)=>{
                if(err) throw err;
                let newData = data + "\n" + url;
                fs.appendFile('url.txt', newData, (err)=>{
                    if(err) throw err;
                    console.log(`your url=> ${url} is append to the file url.txt`);
                });
            });
        }else{
            fs.writeFile("url.txt", url, (err)=>{
                if (err) throw err;
                console.log(`Your ${url} is Logged in url.txt file`);
            });
        }
    })

})
.catch((error)=>{
    if (error) throw error;
});