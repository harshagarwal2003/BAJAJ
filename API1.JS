const express = require('express');
const app = express();

app.use(express.json());

const url = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount"

app.get('/',(req,res) =>{
  try{
  console.log('server is running');
  }
  catch(e){
    console.log(error message);
  }
});

app.post(url,(req,res)=>{
   try{
     return res.status(200).json({
       "name":"Harsh Agarwal";
       "email":"harsh1924.be21@chitkara.edu.in";
       "roll-number":2110991924;
       "phone":7817948033;
        
     });
  }catch(e){
       console.log(error message);
   }
});