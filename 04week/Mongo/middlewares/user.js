const { User } = require('../db/index')

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({ username, password })
    .then(function(value){
        if(value) next()
        else res.json({msge: 'User doesnt exist'})
    })
}

module.exports = userMiddleware;