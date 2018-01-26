myApp.controller('TrackEmployeeController', ['HermesService', function(HermesService) {
    const self = this;

    self.employees = [

            {
                firstName: 'Lukas',
                lastName: 'Nord',
                employeeId: 1234,
                title: 'Programmer',
                salary: 10000,
                detailsStatus: false
            },
            {
                firstName: 'Patrick',
                lastName: 'Connelly',
                employeeId: 4321,
                title: 'Software Developer',
                salary: 11000,
                detailsStatus: false
            },
            {
                firstName: 'Darian',
                lastName: 'Nasrabadi',
                employeeId: 500,
                title: 'Software Engineer',
                salary: 12000,
                detailsStatus: false
            },
            {
                firstName: 'Alaethia',
                lastName: 'Dvoracek',
                employeeId: 800,
                title: 'Engineering Programmer',
                salary: 13000,
                detailsStatus: false
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

    // self.editStatus = HermesService.editStatus;  ---> once we move to HERMES
    
    self.showDetails = function(status){ // place inside details button displayed it has this NGCLICK function.
        status = !status; //when clicked it can either open the details or close it if they choose.
        
    }




}]);
