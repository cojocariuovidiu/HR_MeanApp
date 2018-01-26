myApp.controller('ReportController', ['HermesService', function (HermesService) {
    const self = this;

    self.salaryMetrics = {};
    self.salaryMetrics = HermesService.salaryMetrics;
    // self.displayMetrics = {};

    self.employees = HermesService.employees;
    self.currentTitle = self.employees.list[0].title;
    HermesService.getAverageSalary();



    // getAverage()

}]);