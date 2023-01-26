import express from 'express'
import MenuSchema from '../models/menu.js'


const router = express.Router() // Ineheretence from Router.

router.get('/', async (req, res) => { // One URL

  const GetMenus = await MenuSchema.find()
})

router.post('/insertDoc', async (req, res) => {

  const { name, price, category } = req.body

  const NewMenu = await new MenuSchema({    // Format Document
    name,
    price,
    category
  }).save()  // Save in DB 

  res.json('Success')
})

export default router

