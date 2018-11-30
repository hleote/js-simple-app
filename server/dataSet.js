
const fs = require('fs')
const moment = require('moment')
const helperFunc = require('./helperFunc')

const dataArray = []

for (let index = 0; index < 300; index++) {
    const randomNum = Math.floor(Math.random() * 200) - 100
    const data = {
        date: moment(),
        status: helperFunc.handleStatus(randomNum),
        paymentType: helperFunc.handlePaymentType(randomNum),
        amount: randomNum
    }
    dataArray.push(data)
}

fs.writeFileSync('dataFile.json', JSON.stringify(dataArray))