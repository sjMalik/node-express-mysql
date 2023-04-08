const User = require('../models/users');

exports.register = (req, res)=> {
    if(!req.body){
        res.status(400).send({
            message: 'Content cant be empty'
        })
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    User.register(user, (err, data)=> {
        if(err){
            res.status(500).send({
                message: err.message || 'Some error happened during user registration'
            })
        }else{
            res.send(data);
        }
    })
}