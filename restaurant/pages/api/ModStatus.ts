import { MongoClient, ObjectId } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id_ = req.query.id
  const status_ = req.query.newstate

  const uri = 'mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0'
  const client = new MongoClient(uri)

  client.connect().then(() => {

    const db = client.db('restaurants')

    db.collection('orders').updateOne(
      { _id: new ObjectId(id_ as string) },
      { $set: { status: status_ } }
    ).then((response) => {

      res.status(200).json({ resp: response })
      client.close()

    })

  })
}
