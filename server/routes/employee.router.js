const express = require('express');
const router = express.Router();
const employeeSchema = require('../modules/employee.schema');
const mongoose = require('mongoose');

let Employee = mongoose.model('Employee', employeeSchema);


/* GET REQUESTS */

router.get('/', (req, res)=> {

    Employee.find( { }, (error, data) => {
        if(error){
            console.log('error on find', error);
            res.sendStatus(500)
        }else {
            console.log('Found your employees: ', data);
            res.send(data);
        }
    }); 
});//end GET








/* POST REQUESTS */









/* PUT REQUESTS */









/* DELETE REQUESTS */






  




/* MISC FUNCTIONS (If any) */









module.exports = router;