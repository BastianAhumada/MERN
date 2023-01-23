import express from 'express'

const router = express.Router()

router.get('/', (req,res) => { // One URL
  res.json({
    name: "work"
  })
})

router.get('/testUrl', (req,res) => { // Other URL 
  res.send('Hello URLs')
})

export default router

