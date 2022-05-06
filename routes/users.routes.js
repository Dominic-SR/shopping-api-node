var express = require('express');
const FileUpload = require('../utils/file');
const passport = require('passport');

//router instance
var router = express.Router();

var UserController = require('../controller/user.controller')

//-----------------------------Register-------------------------//
router.post('/register',FileUpload.base64ToImage("profile_picture","profile_picture"),UserController.CreateUser);