import express from './express' ;
const app = express() ;


app.get ( '/' , ( request , response ) => {
    response.send("hello world");
});


app.send('/login',(request,response)=>{
    response.send("Hi there");
});


app.listen( 6000 , ( ) => {
    console.log ( "server started" ) ;
});