/*'use strict';

const express = require('express');

	var db = require('./db')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {

var mysql      = require('mysql');
 var connection = mysql.createConnection({
    host: 'shn.world',
    user: 'shnwo2bp_Admin',
    password: '$hnCM2018',
    database: 'shnwo2bp_SHN'
 });

 connection.connect();

 connection.query('SELECT * from SHN_Leads', function(err, rows, fields) {
    if (!err)
     console.log('The solution is: ');
   else
     console.log('Error while performing Query.' + err);
 });

 connection.end();
  
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
*/

var express = require('express');
var app = express();

var keepmeupdated = require('./controllers/KeepMeUpdated');

//both index.js and things.js should be in same directory
app.use('/KeepMeUpdated', keepmeupdated);

app.listen(3001);