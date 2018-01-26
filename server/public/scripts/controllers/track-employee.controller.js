myApp.controller('TrackEmployeeController', ['HermesService', function(HermesService) {
    const self = this;
    
    HermesService.getEmployees();
    // Data bind to HermesService:  
    self.employees = HermesService.employees;
    
























/* Details Button */












}]);
