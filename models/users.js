const connection = require('../config/connection');

const User = function(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
};

User.register = (newUser, callback) => {
    connection.query('INSERT INTO users SET ?', newUser, (err, res) => {
        if(err){
            callback(err, null);
            return;
        }

        callback(null, {id: res.insertId, ...newUser});
    })
};

User.login = (email, password, callback) => {
    // 
}

module.exports = User;