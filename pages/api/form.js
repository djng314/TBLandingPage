import mongoose from 'mongoose';
import dbConnect from '../../lib/dbConnect';
import contacts from '../../model/contacts'
export default async function handler(req, res) {
    await dbConnect()
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.preferred || !body.email) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'First or email name not found' })
    }else{
      await contacts.create({
        Name: body.preferred,
        Email: body.email
      })
    }
  
    // Found the name.
    // Sends a HTTP success code
    res.redirect('/form1Success',200)


  }