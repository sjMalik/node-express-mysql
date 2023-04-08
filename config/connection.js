const mysql = require('mysql');
const config = require('./config.json');

const connection = mysql.createConnection({
    host: config.dbConfig.host,
    user: config.dbConfig.user,
    password: config.dbConfig.password,
    database: config.dbConfig.db,
    debug: false
});

connection.connect((err)=> {
    if(err){
        console.log(`Error connecting to database: ${err}`)
    }else {
        console.log(`Database connection established`)
    }
});

module.exports = connection;