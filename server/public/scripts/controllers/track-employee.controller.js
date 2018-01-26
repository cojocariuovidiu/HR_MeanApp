myApp.controller('TrackEmployeeController', ['HermesService', function(HermesService) {
    const self = this;

    self.employees = [

            {
                firstName: 'Lukas',
                lastName: 'Nord',
                employeeId: 1234,
                title: 'Programmer',
                salary: 10000,
                
            },
            {
                firstName: 'Patrick',
                lastName: 'Connelly',
                employeeId: 4321,
                title: 'Software Developer',
                salary: 11000,
            },
            {
                firstName: 'Darian',
                lastName: 'Nasrabadi',
                employeeId: 500,
                title: 'Software Engineer',
                salary: 12000,
            },
            {
                firstName: 'Alaethia',
                lastName: 'Dvoracek',
                employeeId: 800,
                title: 'Engineering Programmer',
                salary: 13000,
            }



    ];





//example employee data
    // {
    //     firstName: {type: String, required: true},
    //     lastName: {type: String, required: true},
    //     employeeId: {type: Number, unique: true, required: true},
    //     title: {type: String, required: true},
    //     salary: {type: Number, required: true},
    //     hireDate: {type: Date, default: Date.now}
    // }


















/* Details Button */












}]);
