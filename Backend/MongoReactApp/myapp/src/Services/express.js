
const express = require('express') ;
const cors = require('cors') ;
let app = express() ;
let port = 4000 ;
let client ;

const { MongoClient } = require('mongodb') ;
const uri = "mongodb+srv://shivam:shivam@cluster0.wphzlzm.mongodb.net/?appName=Cluster0?directConnection=true?retryReads=true?retryWrites=true" ;


async function run() {
  try {
    client = new MongoClient(uri) ;
    await client.connect() ;
    console.log( await client.db("Shop").command({ ping: 1 }) ) ;
    console.log(`Pinged your deployment. You successfully connected to MongoDB!`) ;
  } finally {
    await client.close() ;
  }
}
run().catch(console.dir) ;

// async function ensureMongoDBConnection(req, res, next) {
//     if (!client) {
//       await run() ;
//     }
//     next() ;
// }
// app.use(ensureMongoDBConnection) ;

app.use(cors()) ;
app.use(express.json()) ;

app.get('/HOME',async (req,res)=>{
  try {
    run() ;
    let response = await client.db('Shop').collection('Products').find().toArray() ;
    res.status(200).send(response) ;
  } catch (error) {
    console.log(error) ;
  }
})

app.post('/ADD/:name/:price/:url/:description',async(req,res)=>{
  try{
    run() ;
    let response = await client.db('Shop').collection('Products').insertOne({
      name : req.params.name,
      price : req.params.price,
      url : req.params.url,
      description : req.params.description
    }) ;
    res.status(200).send(response) ;
  }catch(error){
    console.log(error);
  }
})

app.delete('/DELETE',async (req,res)=>{
  try{
    run() ;
    let response = await client.db('Shop').collection('Products').deleteOne(req.body) ;
    res.status(200).send(response) ;
  }catch(err){
    console.log(err) ;
  }
})

app.post( '/SIGNUP' , async(req,res) => {
    try {
      run() ;
      let response = await client.db("Shop").collection("admins").insertOne(req.body) ;
      console.log(res);
      res.status(201).send(response) ;
    }catch(error) {
      console.dir(error) ;
    }
}) ;

app.get( '/LOGIN/:email/:password' , async(req,res) => {
    try{
        run() ;
        let response = await client.db('Shop').collection('admins').findOne({
            "email":req.params.email,
            "password":req.params.password
        }) ;
        res.status(200).send(response) ;
    }
    catch(err){
        console.log(err) ;
    }
})

app.get( '/' , (req,res) => {
    res.send(`Server started`) ;
}) ;

app.listen(port,()=>{
    console.log(`Listening to port number ${port}`) ;
})