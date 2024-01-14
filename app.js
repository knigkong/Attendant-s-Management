const express = require ('express');

const router = express.Router();

const app = express();
//global Middleware
app.use((req, res, next) =>{
    console.log("Req", req)
    next();
});

//global API

//global Routes
// app.use('/api/v1/student', (req, res, next)=>{
// res.send('Hello World;');
// });

//Get All 
router.get('/api/v1/student', (req, res, next) =>{
    res.send("Student 1");
});

//Get Sigle
router.post('/api/v1/student/:id', (req, res, next) =>{
    res.send("Student 2");
});

//Create New
router.put('/api/v1/student', (req, res, next) =>{
    res.send("Student 3");
});

app.use(router);

module.exports=app;