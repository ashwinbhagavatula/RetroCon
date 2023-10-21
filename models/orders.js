import {Schema, models, model} from 'mongoose';

const OrderSchema = new Schema({
    userId:{
        type:String,
        required:true,
    },
    products:[{type:Object}],
    cardNumber:{
        type:String,
        required:true,
    },
    paymentStatus:{
        type:String,
        required:true
    },
    },
    {timestamps:true}
);

const Order = models.Order || model('Order',OrderSchema);

export default Order;