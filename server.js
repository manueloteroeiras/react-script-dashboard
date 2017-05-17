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
  let file = fs.readFileSync('./uploads/users.csv','utf-8')
  return {promise : insertDocuments(csvjson.toObject(file), communityID), files: file }
  
}

var insertDocuments = function(data, communityID) {
  let promisesAPI = data.map((item, key) =>{
    return new Promise((resolve, reject)=>{
      let user = Object.assign({}, item, { password: 'scholas', role: 'user', profilePicture: '', community: communityID });

        axios(`${API}/api/users`,{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: user
        })
        .then((response) => resolve(response))
        .catch((err) => reject(err))

    })
      

  });

  
  return promisesAPI

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
  let promisesAPI = getFile(req.params.id)
  let { promise, files } = promisesAPI;
  promise.all(files)
  console.log(promisesAPI)
	res.send(200, req.files)
});





console.log('Starting app... \nListening on port ' + port);
app.listen(port);
