import fs from 'fs'
// const filePath = ('mockData/items.json')
const billsFilePath = new URL('../bills/bills.json', import.meta.url)
function readBillsFromFile () {
  try {
    const fileContents = fs.readFileSync(billsFilePath, 'utf-8')
    return JSON.parse(fileContents)
  } catch (error) {
    // If the file doesn't exist or there's an error reading it, return an empty array
    return []
  }
}
function writeBillsToFile (bills) {
  fs.writeFileSync(billsFilePath, JSON.stringify(bills, null, 2))
}
function storeBillData (billData) {
  const bills = readBillsFromFile()
  bills.push(billData)
  writeBillsToFile(bills)
}
function getAllBills () {
  return readBillsFromFile()
}
export { storeBillData, getAllBills }
