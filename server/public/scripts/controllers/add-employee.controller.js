myApp.controller('AddEmployeeController', ['HermesService', function(HermesService, $mdToast) {
    const self = this;
    self.addedEmplopyee = {};
    
    
    
self.addEmployee = function(employee){  
    HermesService.addEmployee(employee);
}
 
self.openToast = function($event) {
    $mdToast.show($mdToast.simple().textContent('Employee Added!'));
  };

    



}]);
