const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employeeSchema = require('../modules/employee.schema');

let Employee = mongoose.model('Employee', employeeSchema);


/* GET REQUESTS */

router.get('/', (req, res) => {

    Employee.find({}, (error, data) => {
        if (error) {
            console.log('error on find', error);
            res.sendStatus(500)
        }else{
            res.send(data);
        }
    });
}); //end GET








/* POST REQUESTS */

router.post('/', (req, res) => {
    console.log('data to save: ', req.body);
    let employeeToAdd = new Employee(req.body);

    employeeToAdd.save((error, savedEmployee) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    }); // end save

}); // end post route







/* PUT REQUESTS */
router.put('/refresh', (req, res) => {
    // update in collection
    Employee.update(
        {},
        {detailsStatus: false},
        {multi: true},
        (error, updatedDocument) => {
            if (error) {
                console.log('THIS IS THE ERROR ON REFERSHHHHHHHHHHHHHH: ', error);
                res.sendStatus(500);
            } else {
                // console.log('Document before it was updated!: ', updatedDocument);
                res.sendStatus(200);
            }
        }
    )

});

router.put('/submit/:id', (req, res) => {
    let uniqueId = req.params.id;
    let employee = req.body;
    // update in collection
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






/* DELETE REQUESTS */



router.delete('/:id', (req, res) => {
    let uniqueId = req.params.id;
    Employee.findByIdAndRemove(
        {"_id": uniqueId},
        // function(error, removed) 
        (error, removedDocument) => {
            if (error) {
                console.log('error on remove: ', error);
                res.sendStatus(500);
            } else {
                // console.log('Document we removed: ', removedDocument);
                res.sendStatus(200);
            }
        }
    )

});







/* MISC FUNCTIONS (If any) */

router.get('/:title', (req, res) => {
    let title = req.params.title;
    console.log('title ', title);
    
    let pipeline = [{
        "$group": {
            "_id": "$title",
            "averageSalary": {
                "$avg": "$salary"
            },
            "floorSalary": {
                "$min": "$salary"
            },
            "ceilingSalary": {
                "$max": "$salary"
            }
        }
    }];

    Employee.aggregate(pipeline, function (err, result) {
        if (err) {
            res.send(String(err));
        }
        console.log('avg result ', result);
        res.send(result);
    })
})



module.exports = router;