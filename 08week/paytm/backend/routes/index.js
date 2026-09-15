const express = require('express')
const router = express.Router()
const userRouter = require('./user')

// handles api/v1/.....

router.use('/user', userRouter);
// api/v1/user/....  now go to userRouter

module.exports = router;

// handles api/v1/transactions