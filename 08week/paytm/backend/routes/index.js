const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const accountRouter = require('./account')

// handles api/v1/.....
router.use('/user', userRouter);
// api/v1/user....  now go to userRouter
router.use('/account', accountRouter)

module.exports = router;

// handles api/v1/transactions