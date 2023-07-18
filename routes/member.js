const express = require('express');
const router = express.Router();

const Member = require('../models/Member');


// POST route, on form submission, stores input values to database
router.post('/newMember', async (req, res, next) => {
    try {
        const { fname, lname, email, birthday, size } = req.body;

        let member = await Member.findOne({ email });

        if(member) {
            alert('Email is already registered as a member');
        } else {
            member = new Member({
                fname,
                lname,
                email,
                birthday,
                size
            });

            console.log(member);
            await member.save();
            res.json(member);
            res.render('./index.html');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Server error');
    }
    
});

module.exports = router;