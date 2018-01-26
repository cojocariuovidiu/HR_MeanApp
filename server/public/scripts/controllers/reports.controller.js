myApp.controller('ReportController', ['HermesService', function (HermesService) {
    const self = this;
    HermesService.getAverageSalary();
    self.list = function (title) {
        // console.log('title ', title);
        // if (title == 'All') {
        //     console.log('all');
        // }
        console.log('metrics: ', self.employees.list[0].title);

        HermesService.getAverageSalary(title);
    };
    
    self.salaryMetrics = {};
    self.salaryMetrics = HermesService.salaryMetrics;
    // self.displayMetrics = {};
    
    self.employees = HermesService.employees;
    self.currentTitle = self.employees.list[0].title;

    
    // getAverage()

}]);