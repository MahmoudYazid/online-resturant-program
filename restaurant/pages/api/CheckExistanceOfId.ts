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

    const response = await db.collection('users').find({
      _id: new ObjectId(id_ as string)
    }).toArray()

    if (response.length > 0) {
      res.status(200).json({ resp: response })
    } else {
      res.status(200).json({ resp: [] })
    }

    await client.close()

  } catch (error) {
    console.error(error)
    res.status(200).json({ resp: [] })
  }
}