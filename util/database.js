// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodecomplete',
//     password: 'anshul@1998'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'root', 'anshul@1998', {dialect: 'mysql', host:'localhost'});

module.exports = sequelize;