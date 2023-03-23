const express = require('express')
const app = express()
var cors = require('cors');


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(cors());
app.use(express.json());

app.post('/uploadFile', function (req, res) {
    res.send('www.google.com')
  })


app.listen(3000,(req,res)=>{
  console.log(`3000 Port Activate successfully `);
})
