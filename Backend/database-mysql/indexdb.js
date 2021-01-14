var mysql = require('mysql');  
var db = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "root"  , 
database : 'USER'
});  
db
module.exports.db=db

