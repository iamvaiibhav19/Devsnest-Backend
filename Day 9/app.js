const express = require('express');
const app = express();
const path = require('path'); // to access file system
app.listen(4000);
console.log(__dirname);
// __dirname => absolute path of current directory

app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "jade");

 
app.get('/', (req, res) => {
    res.status(200).cookie('toke', 'test', {
        expire:new Date(Date.now()+8*3600000)
    })
    .cookie('hello','hello').redirect(301,'/admin')
    // for rendering Dynamic html to frontend
    // res.render('layout', { title: "Express" })
})

// sending static files using res.sendFile() 
/*
structure:
    res.sendFile(path, [options], [callback function]) 
res.sendFile() does => 1. sends static files as response
                       2. sets Content-Type response http header based on the file type to be rendered
*/

// res.sendFile(path.join(__dirname, "public/hello.txt"), "test.txt");
// to make user download a file
// res.download(path.join(__dirname, "public/hello.txt"));

// res.sendFile(path.join(__dirname, "public/naruto.jpg"), "img.jpg");