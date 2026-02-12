import { MongoClient } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

const uri = 'mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  const name_ = req.query.name
  const address_ = req.query.address
  const tel_ = req.query.tel
  const order_ = req.query.order
  const note_ = req.query.note
  const email_ = req.query.email

  const client = new MongoClient(uri)

  try {
    await client.connect()
    const db = client.db('restaurants')

    await db.collection('orders').insertOne({
      name: name_,
      address: address_,
      phone: tel_,
      order: order_,
      note: note_,
      email: email_,
      status: 'on waiting List'
    })

    res.status(200).json({ Resp: 'ok' })
    await client.close()

  } catch (error) {
    console.error(error)
    res.status(500).json({ Resp: 'error', error: 'Database error' })
  }
}