const express = require(‘express’); 

const cors = require(‘cors’);

const app = express();

app.use(cors());

app.get(“/deneme”,function(req,res){

res.send(“mkdir emirhankarakoc_rat_2023 && cd emirhankarakoc_rat_2023 && echo basarili > mesaj.txt”)

});

const port = 2929

app.listen(port);

console.log(`Sunucu ${port} portunda calisiyor.`);