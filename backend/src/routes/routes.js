import express from "express";
import {create_user} from  '../controller/user_controller.js'

const routes = express.Router()
routes.post('/laxxy',create_user)

export default routes