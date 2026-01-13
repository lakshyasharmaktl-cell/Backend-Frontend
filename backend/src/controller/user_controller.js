import user_model from '../models/user_models.js'
import {newUserOtp} from '../mail/nodemailer.js'
import { error } from '../error/error_handling.js'
import {uploadProfileImg} from '../image/upload.js'

export const create_user = async (req, res) => {
  try {
    const data = req.body
   const file = req.file 

   if(file){
     data.profileImg = await uploadProfileImg(file.path)
   }
  
    const DB = await user_model.create(data)

    return res.status(201).send({
      status: true,
      msg: 'User created successfully',
      DB
    })

  } catch (err) {
    return error(err, res)
  }
}
