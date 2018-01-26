const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employeeSchema = require('../modules/employee.schema');
const mongoose = require('mongoose');

let Employee = mongoose.model('Employee', employeeSchema);


/* GET REQUESTS */









/* POST REQUESTS */

router.post('/', (req, res) => {
    console.log('data to save: ', req.body);
    let employeeToAdd = new Employee(req.body);

    employeeToAdd.save( (error, savedEmployee) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);            
        } else {
            console.log('new game Document: ', savedEmployee);            
            res.sendStatus(201);
        }
    }); // end save
    
}); // end post route







/* PUT REQUESTS */









/* DELETE REQUESTS */






  




/* MISC FUNCTIONS (If any) */









module.exports = router;