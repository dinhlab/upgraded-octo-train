import { faker } from '@faker-js/faker'
import fs from 'fs'
const generateDrinkData = () => {
  const drinks = []
  const priceRange = Array.from({ length: 10 }, (_, index) => 15000 + index * 5000)
  for (let i = 0; i < 10; i++) {
    const drink = {
      id: i.toString(),
      name: faker.commerce.productName(),
      price: priceRange[i],
      description: faker.lorem.sentence(),
      image: faker.image.urlLoremFlickr({ width: 400, height: 400, category: 'beverage' })
    }
    drinks.push(drink)
  }
  return drinks
}
const mockDataFilePath = new URL('../mockData/items.json', import.meta.url)
const writeMockDataToFile = () => {
  if (!fs.existsSync(mockDataFilePath)) {
    const mockData = {
      drinks: generateDrinkData()
    }
    const data = JSON.stringify(mockData, null, 2)
    fs.writeFileSync(mockDataFilePath, data)
    console.log('Mock data written to items.json')
  }
}
writeMockDataToFile()
const mockData = JSON.parse(fs.readFileSync(mockDataFilePath, 'utf-8'))
export default mockData
