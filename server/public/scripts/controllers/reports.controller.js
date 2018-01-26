myApp.controller('ReportController', ['HermesService', function (HermesService) {
    const self = this;

    self.list = function (title) {
        console.log('title ', title);
        if (title == 'All') {
            console.log('all');
        }

        HermesService.getAverageSalary(title);
    };


    self.salaryMetrics = HermesService.salaryMetrics;
    self.employees = HermesService.employees;
    console.log('metrics: ', self.salaryMetrics);

    // getAverage()

}]);