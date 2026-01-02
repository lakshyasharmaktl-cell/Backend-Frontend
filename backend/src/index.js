import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemon from 'nodemon';
import routes from './routes/routes.js'


const app = express()

const PORT = 1234
const MongoDBUrl = 'mongodb+srv://lakshaya:wam0BLXAakV2SRMJ@cluster0.9ftkstu.mongodb.net/'

dotenv.config()
app.use(cors())
app.use(express.json())

mongoose.connect(MongoDBUrl)
  .then(() => console.log('MongoDB connect...'))
  .catch(() => console.log('MongoDB error =>', err.message))

  app.use('/',routes)
app.listen(PORT, () => console.log('server is running', PORT))