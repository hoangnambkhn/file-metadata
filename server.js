var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var multer = require("multer");
var upload = multer({dest:'upload/'});
var port  = process.env.PORT || 8080;
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


//
app.post('/upload',upload.single('file'), function(req,res,next){
    var file = req.file;
    var info ={
        "filename " : file.originalname,
        "mimetype " : file.mimetype,
        "size " : file.size
    }
    return res.json(info);
});

app.use(express.static(__dirname+"/public"));
//
// app.get('/',function(req,res,next){
//     res.sendFile(__dirname+"/index.html");
// })
app.listen(port, function(err){
    if(err) return console.error(err);
    console.log("Server listening on port:" + port);
    
})

