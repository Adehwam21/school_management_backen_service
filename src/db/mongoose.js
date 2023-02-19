// importing mongoose and connecting to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/students',
{

    useNewUrlParser : true,
    useUnifiedTopology : true

}).then(() => {
    console.log('Connected successfully to the database.'); // connection succesful message 
}).catch((error) => {
    console.log('Something went wrong', error); // connection unsuccessful message
})