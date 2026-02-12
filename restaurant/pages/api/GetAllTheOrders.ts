import { OrderModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const tel_ = req.query.tel
    mongoose.connect('mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0')
  .then(()=>{
        OrderModel.find({
            
        }).then((response)=>{
        res.status(200).json({resp:response});
        })    
   
  })
}