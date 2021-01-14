const express = require ('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');
//require("dotenv").config();
const {db}=require('./database-mysql/indexdb')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

/*app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Accept, X-Custom-Header, Authorization'
    );
  */// next();
  //setup mySQL
  db.connect(function(err) {  
    if (err) throw err;  
   console.log("Connected database mysql successfully" );  
  });
   



app.listen(PORT, () => console.log (`listening on port ${PORT} and To get started, visit: http://localhost:5000`))
