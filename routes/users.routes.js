var express = require('express');
const FileUpload = require('../utils/file');
const passport = require('passport');

//router instance
var router = express.Router();

var UserController = require('../controller/users.controller');
const userController = require('../controller/users.controller');

//-----------------------------Register-------------------------//
router.post('/register',FileUpload.base64ToImage("profile_picture","profile_picture"),UserController.CreateUser);

//----------------------------Login----------------------------//
router.post('login',userController.LoginUser)

module.exports = router;