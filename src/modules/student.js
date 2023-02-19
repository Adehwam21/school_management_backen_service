// creating schema for student details

const mongoose = require('mongoose') // importing mongoose module

// describing the student schema
const studentSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    studentId : String,
    level : String,
    course : String,
    guardianName : String,
    contact : String
});

// converting studentsSchema into a model...mongoose.model('name', yourSchema)
const Student = mongoose.model('Student', studentSchema);

// export module as Student
module.exports = Student; 