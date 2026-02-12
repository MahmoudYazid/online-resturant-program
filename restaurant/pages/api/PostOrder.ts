// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { OrderModel } from '@/MongoConfig/Schema';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'



export  default  function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name_ = req.query.name;
  const address_ = req.query.address;
  const tel_ = req.query.tel;
  const order_ = req.query.order;
  const note_ = req.query.note;
  const email_ = req.query.email;
  mongoose.connect('mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0')
  .then(()=>{
     const newOrder = new OrderModel({
      name: name_,
      address:address_,
      phone:tel_,
      order:order_,
      note:note_,
      email:email_,
      status:'on waiting List'

     })
     newOrder.save().then(()=>{
      res.status(200).json({ Resp: 'ok' })
     })
  })
 
}
