const express = require('express') ;
const app = express() ;


app.get ( '/' , ( request , response ) => {
    response.send("hello world") ;
}) ;


app.get('/login',(request,response) => {
    response.send("Hi there") ;
}) ;

app.post('/sum/a/b',(request,response) => {
    var x = request.params.a ;
    var y = request.params.b ;
    var z = x + y ;
    response.send({sum : z}) ;
    // console.log(z) ;
}) ;

app.post('/add',(request,response) => {
    var data =  request.body ;
    // response.send({sum : z}) ;
    console.log(data) ;
    response.send({message:"welcome"}) ;
}) ;


app.listen( 5490 , ( ) => {
    console.log ( "server started" ) ;
}) ;