var express = require('express');
var app = express();
var keepmeupdated = require('./controllers/KeepMeUpdated');

app.use('/KeepMeUpdated', keepmeupdated);
app.listen(3001);