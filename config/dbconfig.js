const dotenv = require('dotenv');
dotenv.config();

const config = {
    development: {
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    port: process.env.MARIADB_PORT,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE
    }
// test: {
//     host: 
//     user: 
//     password: 
//     database: 
//     }
}
module.exports = config;
