import express, { response } from "express";
import axios, { Axios } from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "abhishek";
const yourPassword = "Hello@1234";
const yourAPIKey = "5c2cb2d5-7f34-4275-ad7f-59c08a67c0c1";
const yourBearerToken = "df2de4ca-4a5c-492a-80a6-af33bef9872d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const strRes = JSON.stringify(response.data);
    res.render("index.ejs", {content: strRes});
  }catch(error){
    console.log("There is some error : ", error.message);
    res.render("index.ejs", {content: error.message});
  }

});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
 const url = 'https://secrets-api.appbrewery.com/all?page=1';
 const response = await axios.get(url, {
  auth: {
    username: yourUsername,
    password: yourPassword
  }
 });
 const strRes = JSON.stringify(response.data);
 res.render("index.ejs", {content: strRes});

});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  const url = `https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`;
  const response = await axios.get(url);
  const strRes = JSON.stringify(response.data);
  res.render("index.ejs", {content: strRes});
});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 const url = 'https://secrets-api.appbrewery.com/secrets/1';
 const response = await axios.get(url, {
  headers:{
    Authorization: `Bearer ${yourBearerToken}`
  }
 });
 const strRes = JSON.stringify(response.data);
 res.render("index.ejs", {content: strRes});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
