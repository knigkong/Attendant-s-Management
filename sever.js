const app = require('./app')

const dbconnect = require("./mongoose");
dbconnect();
app.listen(8000, ()=> {
    console.log("Server is running on port" ,8000);
});

