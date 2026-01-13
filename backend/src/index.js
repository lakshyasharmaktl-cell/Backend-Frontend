import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/routes.js'


const app = express()

const PORT = 1234

dotenv.config()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://lakshaya:wam0BLXAakV2SRMJ@cluster0.9ftkstu.mongodb.net/')
  .then(() => console.log('MongoDB connect...'))
  .catch((err) => console.log('MongoDB error =>', err.message))

app.use('/', routes)
app.listen(PORT, () => console.log('server is running', PORT))