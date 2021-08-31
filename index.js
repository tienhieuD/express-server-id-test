
const express = require('express')
const app = express()
const port = 80

app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/recharge', (req, res) => {
//   res.send('callback fid');
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
