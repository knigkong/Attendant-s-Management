const mongoose = require("mongoose");
const config = require("./config");

const dbconnect = () => {
    console.log("Hi");
    mongoose.connect(config.MONGO_DB_URL).then(() => console.log("Connected")) .catch(err=>{console.log("err", err)});
};

module.exports =dbconnect;