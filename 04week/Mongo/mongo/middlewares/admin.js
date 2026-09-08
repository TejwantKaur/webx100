const { Admin } = require('../db/index')

function adminMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    // validate
    // Admin.findOne({
    //     username: username,
    //     password: password,
    // }) 
    // if (val == key) pass only one time
    Admin.findOne({ username, password })
    .then(function(value){
        if(value) next();
        else res.status(403).json({ msge: 'User doesnt Exists' })
    })
}

module.exports = adminMiddleware;