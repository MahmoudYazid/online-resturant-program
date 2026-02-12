import { MongoClient } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name_ = req.query.name
  const address_ = req.query.address
  const tel_ = req.query.tel
  const order_ = req.query.order
  const note_ = req.query.note
  const email_ = req.query.email

  const uri = 'mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0'
  const client = new MongoClient(uri)

  client.connect().then(() => {

    const db = client.db('restaurants')

    db.collection('orders').insertOne({
      name: name_,
      address: address_,
      phone: tel_,
      order: order_,
      note: note_,
      email: email_,
      status: 'on waiting List'
    }).then(() => {

      res.status(200).json({ Resp: 'ok' })
      client.close()

    })

  })
}
