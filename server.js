var express = require('express');
var path = require('path');
var app = express();
var multer  =   require('multer');
var fs = require('fs');
var axios = require('axios')

var API = 'https://scholas-qa.bitflowapps.com:3002'

var csvjson = require('csvjson');

var port = process.env.PORT || 3000 ;

var options = {
  delimiter : ',', // optional
  headers : 'firstName,lastName,email,facebook,username'
};
 

var getFile = function(communityID){
  fs.readFile('./uploads/users.csv','utf-8', function read(err, data) {
      insertDocuments(csvjson.toObject(data), communityID)
  });
}

var insertDocuments = function(data, communityID) {
  let itemsLength = data.length;
  var count = 0
  console.log("Items to upload:", itemsLength)
  data.map((item, key) =>{
      let user = Object.assign({}, item, { password: 'scholas', role: 'user', profilePicture: '', community: communityID });

        axios(`${API}/api/users`,{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: user
        }).then((item)=>{
          (item.status == 200)? console.log('√') : console.log('X')
        }).catch((err)=> console.log(err))

  });

}


// getFile(options)


// Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, 'users.csv')
  }
})

var upload = multer({ storage: storage })

app.post('/api/csv/:id', upload.single('file') ,function (req, res) {
	console.log(req.files)
  getFile(req.params.id)
	res.send(200, req.files)
});





console.log('Starting app... \nListening on port ' + port);
app.listen(port);
