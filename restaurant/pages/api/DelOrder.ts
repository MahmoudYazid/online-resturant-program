import { MongoClient, ObjectId } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id_ = req.query.id

  const uri = 'mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0'
  const client = new MongoClient(uri)

  client.connect().then(() => {

    const db = client.db('restaurants')

    db.collection('orders').deleteOne({
      _id: new ObjectId(id_ as string)
    }).then((response) => {

      res.status(200).json({ resp: 'ok' })
      client.close()

    }).catch((error) => {

      res.status(200).json({ resp: 'error' })
      client.close()

    })

  })
}
