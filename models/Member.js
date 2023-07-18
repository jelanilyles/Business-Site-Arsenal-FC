const mongoose = require('mongoose');

const newMemberSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    birthday: Date,
    shirtSize: String
});

module.exports = mongoose.model('Member', newMemberSchema);