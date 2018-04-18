var express = require('express');
var router = express.Router();
//Parse data from JSON POST and insert into MYSQL
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// Configure MySQL connection
var connection = mysql.createConnection({
    host: 'shn.world',
    user: 'shnwo2bp_Admin',
    password: '$hnCM2018',
    database: 'shnwo2bp_SHN'
 });

//Establish MySQL connection
connection.connect(function(err) {
   if (err) 
      throw err
   else {
       console.log('Connected to MySQL');
       // Start the app when connection is ready
       app.listen(3000);
       console.log('Server listening on port 3000');
 }
});

app.use(bodyParser.json())

router.get('/', function(req, res){
   res.send('GET route on things.');
});

router.post('/', function(req, res){
   var jsondata = req.body;
var values = [req.body.firstname,req.body.lastname,req.body.email,req.body.phone];

connection.query('INSERT INTO SHN_Leads (FirstName, LastName, Email, PhoneNumber) VALUES (?,?,?,?)', values, function(err,result) {
  if(err) {
     res.send('Error');
  }
 else {
     res.send('Success');
  }
});
});

//export this router to use in our index.js
module.exports = router;