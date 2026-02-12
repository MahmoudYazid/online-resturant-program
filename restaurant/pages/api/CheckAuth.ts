import { OrderModel, UsersModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const name_ = req.query.name
    const pass_ = req.query.password
    mongoose.connect('mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0')
  .then(()=>{
        UsersModel.find({
            name:name_,
            password:pass_
        }).then((response)=>{
        res.status(200).json({resp:response});
        })    
   
  })
}
