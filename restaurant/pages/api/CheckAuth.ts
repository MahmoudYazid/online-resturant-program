import { OrderModel, UsersModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const name_ = req.query.name
    const pass_ = req.query.password
    mongoose.connect('mongodb+srv://abuelyazidsoftware:mnimai21yo@clone.7pm38gz.mongodb.net/restaurants?retryWrites=true&w=majority')
  .then(()=>{
        UsersModel.find({
            name:name_,
            password:pass_
        }).then((response)=>{
        res.status(200).json({resp:response});
        })    
   
  })
}
