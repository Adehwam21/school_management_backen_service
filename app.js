// connecting to database
require('./src/db/mongoose');

// creating server with express.js
const express = require('express');
const app = express();
const PORT = 5000 // declaring serer port

// importing student model
const Student = require('./src/modules/student');

// to save student details as json object using express.json
app.use(express.json());



// route for saving student details using POST method
app.post('/register-student', (req, res) =>{

    // create and save student details in database
    Student.create(req.body).then((Student) => { 
        res.status(201).send(Student); // when request is successfu;
    })
    .catch((error) => {
        res.status(400).send(error); // when request raides an error 
    })
})



// route for geting student details by id using the GET method
app.get('/students/:id', (req, res) =>{

    // find student profile with matching id in url
    Student.findOne({studentId: req.params.id}).then((Student) => { 
        if (!Student){
            return res.status(404).send(); // send empty list
            console.log("Student ID does not match any Student profile");
        }
        res.status(201).send(Student); // send student details if id match
    })
    .catch((error) => {
        res.status(400).send(error); // when request raises an error 
    })
})


// server setup
app.listen(PORT,(req, res) => {
    console.log("App is currently running on port 5000!") // server port declaration message
})

