import {Schema, models,model} from 'mongoose';

const ProductSchema = new Schema({
    title:{
        type : String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discount:{
      type:Number,
      required:true,  
    },
    quality:{
        type:String,
        required:true
    },
    images:{
        type:Object,
        required:true,
    },
    saved:{
        type:[String],
        default :[]
    },
    
},{timestamps:true});

const Product = models.Product || model('Product',ProductSchema);

export default Product;