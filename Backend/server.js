let express = require("express") ;
let app = express() ;
var path = require('path') ;
const birds = require('./routes/Birds') ;

app.use(express.static('public')) ;
app.use('/birds' ,birds) ;

app.get( '/' , (req,res,next) => {
    res.send("Hello world"+ "    " + __dirname ) ;
    next() ;
}) ;

app.use('/java',(req,res)=>{
    res.send("Welcome to java page") ;
}) ;

app.get('/users/:userId/book/:bookId',(req,res) => {
    res.send(req.params) ;
 }) ;

app.get('/users/:userId-:bookId',(req,res) => {
    res.send(req.params) ;
 }) ;
app.get('/users/:userId.:bookId',(req,res) => {
    res.send(req.params) ;
 }) ;

app.listen(3000,()=>{
    console.log("Server started") ;
}) ;