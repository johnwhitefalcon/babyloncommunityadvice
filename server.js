const express = require('express')
const app = express();
const fs = require('fs')

app.get('/', function(req, res){

    fs.readFile('index.html', function(error, data){
        res.write(data)
        res.end()
    })


})

app.listen(3000);

