import { MongoClient, ObjectId } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

const uri = 'mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id_ = req.query.id
  const status_ = req.query.newstate
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const db = client.db('restaurants')

    const response = await db.collection('orders').updateOne(
      { _id: new ObjectId(id_ as string) },
      { $set: { status: status_ } }
    )

    res.status(200).json({ resp: response })
    await client.close()

  } catch (error) {
    console.error(error)
    res.status(500).json({ resp: null, error: 'Database error' })
  }
}