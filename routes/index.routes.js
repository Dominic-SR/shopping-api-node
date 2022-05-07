var express = require('express');

var router = express.Router();

//--------------users routes--------------//

var UserRouter = require('./users.routes');

router.use('/users',UserRouter);

module.exports = router;