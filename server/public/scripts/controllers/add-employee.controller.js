myApp.controller('AddEmployeeController', ['HermesService', function(HermesService) {
    const self = this;
    self.newEmplopyee = {};
    
    
self.addEmployee = function(employee){
    
    
    HermesService.addEmployee(employee);
}
    









}]);
