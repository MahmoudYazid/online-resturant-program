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

  // ✅ ADD THIS - Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  const tel_ = req.query.tel
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const db = client.db('restaurants')

    const response = await db.collection('orders').find({
      phone: tel_
    }).toArray()

    res.status(200).json({ resp: response })
    await client.close()

  } catch (error) {
    console.error(error)
    res.status(500).json({ resp: [], error: 'Database error' })
  }
}