const { StatusCodes } = require("http-status-codes")
const { message } = require("statuses")
const SpErrorHandler = require("../utils/error-handler")
const { Message } = require("../utils/messages")
const Response = require("../utils/response")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const userModel = require('../models/users.model')

const userController = {
async CreateUser(req,res){
    try{
        let {
            user_name,role_id,user_email,user_password,user_mobile_no,user_address,profile_picture
        } = req.body;

        if(user_email){
            let [user] = await userModel.CreateUser(req.body);
            if(user){
                new Response(
                    res,
                    StatusCodes.OK
                )._SuccessResponse(
                    Message.UserRegister.SuccessMessage.Create
                )
            }
            else{
                new Response(
                    res,
                    StatusCodes.BAD_REQUEST
                )._ErrorMessage(
                    Message.UserRegister.FailureMessage.Create
                )
            }

        }
    }
    catch(err){
        new SpErrorHandler(res,err)
    }
},
async LoginUser(req,res){
    try{
        let {
            user_email,user_password
        } = req.body;

        let [login] = await userModel.LoginUser(req.body)
        if(login.length){

        }
        else{
            
        }

    }
    catch(err){
        new SpErrorHandler(res,err)
    }
}

}

module.exports = userController