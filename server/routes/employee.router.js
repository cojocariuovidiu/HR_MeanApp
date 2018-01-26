const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

let schema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        employeeId: {type: Number, unique: true, required: true},
        title: {type: String, required: true},
        salary: {type: Number, required: 0},
        hireDate: {type: Date, default: Date.now}
    }
)

/* GET REQUESTS */









/* POST REQUESTS */









/* PUT REQUESTS */









/* DELETE REQUESTS */






  





let Employee = mongoose.model('Employee', schema);

module.exports = router;