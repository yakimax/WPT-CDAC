const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log('request');
    // console.log(req);
    res.setHeader('Content-Type','text/html');
    fs.readFile('./index.html',(err,filedata)=>{
        if ( err ) {
            console.log(err);
        } else {
            res.end(filedata);
        }
    });
});

server.listen(3000,'localhost',()=>{
    console.log('listining');
});