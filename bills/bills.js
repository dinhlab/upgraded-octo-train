import { nanoid } from 'nanoid'
import { storeBillData } from './billData.js'
import mockData from '../mockData/index.js'
function createBill (req, res) {
  const { items } = req.body
  let totalPrice = 0
  const billItems = items.map((item) => {
    const { drinkId, quantity } = item
    const drink = mockData.drinks.find((drink) => drink.id === drinkId)
    if (drink) {
      totalPrice += parseInt(drink.price) * quantity
      return { drinkId, quantity }
    } else {
      return null // Ignore invalid drink IDs
    }
  }).filter(Boolean)
  const billId = nanoid()
  const billData = { billId, items: billItems, totalPrice }
  storeBillData(billData)
  res.send('Bill created successfully')
}
export { createBill }
