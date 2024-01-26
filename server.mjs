console.log("this is express server hello world")
import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Hello world! ' + new Date())
  res.send('Hello world! ' + new Date())
  
})

app.get('/profile', (req, res) => {
    console.log('Hello profile!! ' + new Date())
  res.send('Hello profile!! ' + new Date())
  
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})