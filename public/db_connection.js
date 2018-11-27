const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'electron_mysql'
};

const con = mysql.createConnection(config);

con.connect(function(err) {
    if (err) return console.log(err);
    console.log('Connected!');
});