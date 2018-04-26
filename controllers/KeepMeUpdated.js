var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var router = express.Router();
var app = express();


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
  }
});

router.use(bodyParser.json());
router.use(cors());

router.get('/', function(req, res){
   res.send('GET route on things.');
});

router.post('/api', function(req, res){
  var values = [req.body.firstname,req.body.lastname,req.body.email,req.body.phone];
  connection.query('INSERT INTO SHN_Leads (FirstName, LastName, Email, PhoneNumber) VALUES (?,?,?,?)', values, function(err,result) {
    if(err) {
      res.send('Error while inserting into database');
    }
    else {
     res.send('Successful insertion into database');
    }
  });
});

//export this router to use in our index.js
module.exports = router;