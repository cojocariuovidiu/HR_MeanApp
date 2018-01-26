const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employeeSchema = require('../modules/employee.schema');


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
router.put('/:id', (req, res) => {
    let uniqueId = req.params.id;
    let employee = req.body;
    // update in collection
    console.log('LOGGGGGGGGGGGGGGGGGGGGG',employee);
    Employee.findByIdAndUpdate(
        {"_id": uniqueId},
        {$set: employee},
        (error, updatedDocument) => {
            if (error) {
                console.log('error on put update: ', error);
                res.sendStatus(500);
            } else {
                // console.log('Document before it was updated!: ', updatedDocument);
                res.sendStatus(200);
            }
        }
    )

});

// Need to fix mongoose syntax to update all status.
// router.put('/refresh', (req, res) => {
//     let uniqueId = req.params.id;
//     let employee = req.body;
//     // update in collection
//     Employee.update(
//         {$set: {detailsStatus: false}},
//         {multi: true},
//         (error, updatedDocument) => {
//             if (error) {
//                 console.log('error on refresh: ', error);
//                 res.sendStatus(500);
//             } else {
//                 // console.log('Document before it was updated!: ', updatedDocument);
//                 res.sendStatus(200);
//             }
//         }
//     )

// });





/* DELETE REQUESTS */






  




/* MISC FUNCTIONS (If any) */







module.exports = router;