const { StatusCodes } = require("http-status-codes")
const { message } = require("statuses")
const SpErrorHandler = require("../utils/error-handler")
const { Message } = require("../utils/messages")
const Response = require("../utils/response")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const userController = {
async CreateUser(req,res){
    try{
        let {
            user_name,user_email,user_mobile_no,user_address,profile_picture
        } = req.body;

        if(user_email){
            let [user] = await userModal.CreateUser
        }
    }
    catch(err){
        new SpErrorHandler(res,err)
    }
}
}

module.exports = userController