myApp.controller('AddEmployeeController', ['HermesService', function(HermesService) {
    const self = this;
    self.addedEmplopyee = {};
    
    

    self.addEmployee = function(employee) {
        HermesService.addEmployee(employee)
    
    }
    


}]);
