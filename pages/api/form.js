import mongoose from 'mongoose';
import dbConnect from '../../lib/dbConnect';
import contacts from '../../model/contacts'
export default async function handler(req, res) {
    await dbConnect()

    const body = req.body
  

    console.log('body: ', body)

    if (!body.preferred || !body.email) {

      return res.status(400).json({ data: 'First or email name not found' })
    }else{
      await contacts.create({
        Name: body.preferred,
        Email: body.email
      })
    }
  


    res.writeHead(302, { Location: '/form1Success' }).end()


  }