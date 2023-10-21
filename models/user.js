import {Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
    isAdmin:{
        type:Boolean,
        default:false,
        required:true,
    },
    email:{
        type:String,
        unique:[true,'Email already exists'],
        required:[true, 'Email is required'],
    },
    username:{
        type:String,
        required:[true,'Username is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    password:{
        type:String,
    },
    googleAccount:{
        type:Boolean,
        default:false,
        required:true,
    },
    cartItems:[],
    cardList:[{
        type:Object
    }],
    }
    ,
    {timestamps:true}
);

const User = models.User || model('User',UserSchema);

export default User;