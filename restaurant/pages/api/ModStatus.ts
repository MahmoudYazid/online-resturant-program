import { OrderModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const id_ = req.query.id
    const status_ = req.query.newstate
    mongoose.connect('mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0')
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
