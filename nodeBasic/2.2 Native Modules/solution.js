const fs = require("fs");

/*fs.writeFile("message.txt", "hello Abhishek js file", (err)=>{
  if (err) throw err;
  console.log("the file is saved sucessfully!")
} );

let additionalData = "\nhere is some additon data to this file";

//appending a file message.txt
fs.appendFile("message.txt", additionalData, (err)=>{
  if (err) throw err;
  console.log("text has been appended");
});

//reading the content of a file

fs.readFile("message.txt", 'utf-8', (err,data)=>{
  if (err) throw err;
  console.log("File content--> ", data)
})*/

// above code does not print the appended code because js is asyncronys and print and append text are triggered
//symeltenously so print happens before the appned
//below is how we handle this scenario


/*fs.writeFile("message.txt", "we are rewritting the code", (err)=>{
  if (err) throw err;
  let appText = '\nwe are appending text to the after writeFile';
  fs.appendFile('message.txt', appText, (err)=>{
    if (err) throw err;
    fs.readFile("message.txt", 'utf-8', (err, data)=>{
      if (err) throw err;
      console.log("file data : ", data)
    });
  });
});*/

// below code is removing a specific text

fs.readFile("message.txt", "utf-8", (err, data)=>{
  if (err) throw err;
  let removeText = "code";
  updatedText = data.replace(removeText, 'Node Js code');
  fs.writeFile("message.txt", updatedText, (err)=>{
    if (err) throw err;
    console.log("message.txt file has been updated!");
  });
});