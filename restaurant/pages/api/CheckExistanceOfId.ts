import { OrderModel, UsersModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const id_ = req.query.id
    mongoose.connect('mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0')
  .then(()=>{
        UsersModel.find({
            _id:id_
        }).then((response)=>{
            if(response.length>0){
                   res.status(200).json({resp:response});
            }
     
        }).catch((error)=>{
           
             res.status(200).json({resp:[]});
            
        })    
   
  })
}