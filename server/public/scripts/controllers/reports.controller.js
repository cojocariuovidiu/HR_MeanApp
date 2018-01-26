myApp.controller('ReportController', ['HermesService', function(HermesService) {
    const self = this;
    self.titles = ['Clown', 'Monkey', 'Peach'];


    for (let i = 0; i < self.employeeList.length; i++) {
        self.titles.push(self.employeeList[i].title);
    }

    self.employeeList = HermesService.employeeList;

    getAverage()

}]);


let pipeline = 
[
    {
        "$group": {
            "_id": "$title",
            "avgSalary": {"$avg": "$salary"}
        }
    }
]

Employee.aggregate(pipeline, function(err, result){
    if(err) {
        res.send(String(err));
    }
    console.log('avg result ', result);
    // res.send(result);
})