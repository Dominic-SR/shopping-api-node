var express = require('express')

var router = express();

//--------------users routes--------------//

var UserRouter = require('./users.routes');
router.use('/users',UserRouter);