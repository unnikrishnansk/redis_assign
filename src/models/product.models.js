const mongoose = require("mongoose");
const router = require("../controllers/product.controller");

const productSchema = new mongoose.Schema(
    {
        productName : {type : String, required : true},
        productPrice : {type : Number, required : true},
        productQnty : {type : Number, required : true},
    },
    {
        versionKey : false,
        timestamps : true,
    },
);



module.exports  = mongoose.model("products" , productSchema);