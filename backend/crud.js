import 'dotenv/config'
import express from 'express'
import mongoose, { Schema } from 'mongoose'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT

mongoose.connect(process.env.DB_SECRET_KEY)
.then(() => console.log('Connected!'))
.catch(err => console.log(err.message))



const flowersSchema = new Schema({
  name: String,
  price: Number,
  img: String,
});

const flowersModel = mongoose.model('Flowers', flowersSchema);




app.get('/', async (req, res) => {
  try {
    const element = await flowersModel.find({})
    res.send(element)
  } catch (error) {
    res.send("failed to get element")
  }
})

app.get('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const element = await flowersModel.findById(id)
    res.send(element)
  } catch (error) {
    res.send("failed to get element")
  }
})

app.post('/', async (req, res) => {
  try {
    const {name, price, img} = req.body
    const newelement = new flowersModel({name, price, img})
    await newelement.save()
    res.send('Got a POST request')
  } catch (error) {
    res.send('failed to POST')
  }
})


app.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params
  const element = await flowersModel.findByIdAndDelete(id)
  res.send(`deleted ${id}`)
  } catch (error) {
    res.send(`failed to delete ${id}`)
  }
})

app.listen(port, () => {
  console.log(`running on ${port} port`)
})