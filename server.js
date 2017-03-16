var express = require('express');

var app = express();
var port = process.env.PORT || 3000 ;

// Public path configuration
app.use(express.static(__dirname + '/build'));


console.log('Starting App... \nlistening on port ' + port);
app.listen(port);
