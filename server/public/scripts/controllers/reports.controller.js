myApp.controller('ReportController', ['HermesService', function(HermesService) {
    const self = this;
    self
    
    self.employees = HermesService.employees;


}]);
