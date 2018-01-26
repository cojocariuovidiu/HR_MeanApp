myApp.controller('TrackEmployeeController', ['HermesService', function(HermesService) {
    const self = this;
    
    HermesService.getEmployees();
    // Data bind to HermesService:  
    self.employees = HermesService.employees;
    

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
