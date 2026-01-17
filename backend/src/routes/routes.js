import express from "express";
import multer from 'multer'

import {create_user,user_login,verify_otp} from  '../controller/user_controller.js'
const upload = multer({ storage: multer.diskStorage({}) })

const routes = express.Router()
routes.post('/Api',upload.single('profileImg'), create_user)

routes.post('/verify_otp/:id',verify_otp)
routes.post('/user_login',user_login)

export default routes 