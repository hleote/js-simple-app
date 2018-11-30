import express from 'express';
const cors = require('cors')

const app = express();
const port = 3001;
const file = require('../dataFile.json')

app.use(cors())

app.use(express.static('public'));


app.get('/dataset', function (req, res) {
  if (req.query.status && req.query.paymentType) {
    const result = file.filter(elem => elem.status === req.query.status && elem.paymentType === req.query.paymentType)
    res.json(result)
    return
  }
  else if (req.query.status) {
    const result = file.filter(elem => elem.status === req.query.status)
    res.json(result)
    return
  } else if (req.query.paymentType) {
    const result = file.filter(elem => elem.paymentType === req.query.paymentType)
    res.json(result)
    return
  }
  res.json(file)
})



app.listen(port, () => {

  console.log(`Sales History app listening on port ${port}`);
});
