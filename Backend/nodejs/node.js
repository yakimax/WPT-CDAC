const http = require('http') ;

let server = http.createServer( (req,res) => {
    res.statusCode = 200 ;
    res.setHeader( "Content-type" , "text/plain" ) ;
    res.end("Hello world\n") ;
})

server.listen(3000,'127.0.0.1',(req,res)=>{
    console.log( "hello i am listening" ) ;
})