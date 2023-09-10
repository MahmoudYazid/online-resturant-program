import mongoose, { Schema ,model} from "mongoose";

const OrdersSchima = new Schema({
    name:String,
    phone : String,
    email:String,
    order:String,
    note:String,
    status:String,
    address:String,
})
const UsersSchima = new Schema({
    name:String,
    password : String,
    
})

export const OrderModel = mongoose.models.orders || model('orders', OrdersSchima)
export const UsersModel = mongoose.models.users || model('users', UsersSchima)