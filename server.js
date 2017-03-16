var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000 ;

// Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


console.log('Starting app... \nListening on port ' + port);
app.listen(port);
