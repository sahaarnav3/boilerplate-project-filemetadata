var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

var multer = require('multer');
const upload = multer({ dest: 'uploads/' })

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//the main router logic
app.post("/api/fileanalyse", upload.single('upfile'), (req, res) => { // .single = a single file, and inside bracket will be the name
  // res.json(req.file);
  res.json({ "name":  req.file.originalname, "type": req.file.mimetype, "size": req.file.size});
})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
