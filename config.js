const dotenv = require('dotenv');

dotenv.config();

const config = {
    MONGO_DB_URL: process.env.MONGO_DB
};

module.exports = config;
console.log(process.env.MONGO_DB);