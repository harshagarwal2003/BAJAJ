const express = require('express');
const app = express();

app.use(express.json());

const url = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks"

app.get('/', (req,res) => {
    try{
     res.send('Server is running 2');
   }
     catch(e){
      console.log(error message);
     }
});

app.post(url ,(req,res) =>{
  try{ 
       return res.status(200).json({
        {
       "company": "Bajaj Finserv",
       "currentPrice": 6547.95,
       "accountNumber": "BFHL0018629", 
      "githubRepoLink" : " https://github.com/harshagarwal2003/BAJAJ"
}
});
  
  }
  catch(e){
    console.log(error message);
  }
});

