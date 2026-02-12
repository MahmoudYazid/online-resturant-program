import { MongoClient, ObjectId } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

const uri = 'mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  const id_ = req.query.id
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const db = client.db('restaurants')

    await db.collection('orders').deleteOne({
      _id: new ObjectId(id_ as string)
    })

    res.status(200).json({ resp: 'ok' })
    await client.close()

  } catch (error) {
    console.error(error)
    res.status(200).json({ resp: 'error' })
  }
}