var express = require('express');
var multer = require('multer');

var upload = multer({ dest: 'uploads/' });
var app = express();
var port = process.env.PORT || 8080; //for Heroku

//answer to homepage requests
app.use('/', express.static(__dirname + '/public'));

app.post('/', upload.single('upld'), function(req, res, next){
  var size = req.file.size;
  res.json({'file size (in bytes)' : size});
  console.log('(' + size + ' bytes) ' + req.file.originalname + ' successfully uploaded!');
  next();
});


//start server
app.listen(port, function () {
  console.log('File size app listening on port ' + port);
});
