const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:[true,"Product name is required"],
        trim:true,
        minlength:[5,"product name is atleast 5 character long"]
    },
    price:{
        type:Number,
        required:[true,"Price is require"],
    },
    description:{
        type:String,
        required:[true,"description is required"],
        trim:true,
        minlength:[5,"product name is atleast 5 character long"]
    },
    productImage:{
        type:String,
    },
    category:{
        type:String,
        enum:['veg','non-veg','drinks','snacks'],
        default:'veg',
    },
    quantity:{
        type:Number,
        default:10,
        required:[true,'Product quantity must be specify']
    },
    inStock:{
        type:Boolean,
        required:[true,'in stock must be provided'],
        default:true
    }
},{timestamps:true});


const Product = mongoose.model("Product",productSchema);

module.exports = Product;
