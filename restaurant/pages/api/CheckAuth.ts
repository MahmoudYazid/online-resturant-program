import { MongoClient } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name_ = req.query.name
  const pass_ = req.query.password

  const uri = 'mongodb+srv://abuelyazidsoftware:mahmoud2020@cluster0.4pb3ivp.mongodb.net/restaurants?appName=Cluster0'
  const client = new MongoClient(uri)

  client.connect().then(() => {

    const db = client.db('restaurants')

    db.collection('users').find({
      name: name_,
      password: pass_
    }).toArray().then((response) => {

      res.status(200).json({ resp: response })
      client.close()

    })

  })
}
