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
    self.editStatus = false; //to show/hide edit status universal to controller/service.


    self.showDetails = function(employee){ // place inside details button displayed it has this NGCLICK function.
        console.log('In show details button');
    
        employee.detailsStatus = !employee.detailsStatus; //when clicked it can either open the details or close it if they choose.
        
        $http.put(`/employee-list/${employee.employeeId}`, employee)
            .then(function (response) {
                // console.log('get response', response);
                self.getEmployees(); //FIX THIS TO PROPER GET DATA FROM HERMES.
            })
            .catch(function (response) {
                console.log('error on put update detailStatus', response);
            });
    }

    self.editButton = function(employee) {
        console.log('In edit button');
    
        self.editStatus = !self.editStatus; //when clicked it can either open the details or close it if they choose.
    
    }







}]);
