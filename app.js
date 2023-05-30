import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import mockData from './mockData/index.js'
import { createBill } from './bills/bills.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello, world!')
})
app.get('/drinks', (req, res) => {
  res.json(mockData.drinks)
})
app.post('/bills', createBill)
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
app.use((err, req, res, next) => {
  console.log('ERROR', err.message)
  const statusCode = err.statusCode || 500
  res.status(statusCode).send(err.message)
})
