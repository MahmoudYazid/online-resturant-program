import { OrderModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const id_ = req.query.id
    const status_ = req.query.newstate
    mongoose.connect('mongodb+srv://abuelyazidsoftware:mnimai21yo@clone.7pm38gz.mongodb.net/restaurants?retryWrites=true&w=majority')
  .then(()=>{
        OrderModel.findOneAndUpdate({
            _id:id_ 
        },{
            status:status_
        }).then((response)=>{
        res.status(200).json({resp:response});
        })    
   
  })
}
