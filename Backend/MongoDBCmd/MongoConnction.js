// const mongoose = require('mongoose') ;
// const express = require('express') ;

// let app = express() ;

// mongoose.connect("mongodb+srv://shivam:shivam@cluster0.wphzlzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//    useNewUrlParser: true ,
//    useUnifiedTopology: true
// }) ;
// const contactSchema = {
//    email: String,
//    query: String,
// } ;
// const Contact = mongoose.model("Contact", contactSchema);
// app.post("/contact", function (req, res) {
//    const contact = new Contact({
//        email: req.body.email,
//        query: req.body.query,
//    }) ;
//    contact.save(function (err) {
//        if (err) {
//          res.redirect("/error");
//        } else {
//            res.redirect("/thank-you");
//            console.log("there") ;
//        }
//    }) ; 
// }) ;
// app.get('/',(req,res) => {
//    res.send("hello world") ;
// })
// app.listen(3000,(req,res)=>{
//    console.log("hello there") ;
// }) ;

// const { MongoClient } = require("mongodb") ;

// // Replace the uri string with your connection string.
// const uri = "mongodb+srv://shivam:shivam@cluster0.wphzlzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri) ;

// async function run() {
//   try {
//     const database = client.db('sample_mflix') ;
//     const movies = database.collection('movies') ;

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' } ;
//     const movie = await movies.findOne(query) ;

//     console.log(movie) ;
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close() ;
//   }
// }
// run().catch(console.dir) ;

const { MongoClient } = require("mongodb") ;
const express = require('express') ;
let app = express() ;
// Replace the following with your Atlas connection string                                                                             
const url = "mongodb+srv://shivam:shivam@cluster0.wphzlzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Connect to your Atlas cluster
const client = new MongoClient(url) ;
async function run() {
    try {
        await client.connect() ;
        let db = client.db('sample_mflix')
        console.log("Successfully connected to Atlas") ;
      //   const mov = await db.collection("movies").findOne({ title : "The Italian" }) ;
      //   const count =  await db.collection("movies").updateOne( { title : "The Italian" } ,{$set :{title : "The Italian cake"}}) ;
      //   console.log(count) ;
      // const mov = await db.collection("movies").find({year : { $gt : 1980 }}).toArray() ;
      const movies = db.collection("movies").aggregate([
         {
            $match : { year : 1999 }
         } ,
         {
           $match :{  imdb : {$lt : { rating : 5} } }
         },
         {
            $sort :  { runtime : -1 }
         }
      ]) ;
      await movies.forEach(console.dir) ;
   } catch (err) {
        console.log(err.stack) ;
    }
    finally {
        await client.close() ;
    }
}
run().catch(console.dir) ;