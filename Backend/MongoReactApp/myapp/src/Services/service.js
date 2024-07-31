const mongoose = require('mongoose') ;
const { connect, model, Schema } = mongoose ;

const AdminSchema = new Schema({
    email: { type: String, required: true, unique: true } ,
    password: { type: String, required: true }
}) ;

const OrdersSchema = new Schema({
    product: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true }
}) ;

let OrdersModel = model( 'orders' , OrdersSchema ) ;
let AdminModel = model( 'admins' , AdminSchema ) ;

async function run() {
    try{
        let response = await connect('mongodb+srv://shivam:shivam@cluster0.wphzlzm.mongodb.net/Shop?retryWrites=true&w=majority&appName=Cluster0') ;
        console.log( " connected to database " + response.connections[0].name) ;
        mongoose.set( 'bufferCommands', false ) ;
        // console.log(await AdminModel.findOne({"email":"gvgjh@gmail.com","password":"pass"})) ;
        // console.log( await model('Orders').create({'product':"cream","Description" :"Aalu","Price":"10","Category":"zandu","Quantity":"sunya" })) ;
        // console.log( await model('orders').findOne({'product':"cream","Description" :"Aalu","Price":"10","Category":"zandu","Quantity":"sunya" })) ;
    }catch(err) {
        console.log( err ) ;
    }
}
run() ;

module.exports = {
    checkCredentials : async function ( loginData ) {
        try{
            // console.log(AdminModel) ;
            let res = await AdminModel.findOne( loginData ) ;
            return res ;
        }catch(err) {
            console.dir(err) ;
        }
    } ,
    createUser : async function ( userData ) {
        try{
            let res = await AdminModel.create( userData ) ;
            return res ;
        }catch( err ) {
            console.dir( err ) ;
        }
    }
}
