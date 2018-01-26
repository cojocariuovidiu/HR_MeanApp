myApp.service('HermesService',['$http', function($http) {
console.log('inside service');
    const self = this;
    self.employees = { list: [{name: 'Clown', title: 'Pat'},{name: 'Monkey', title: 'D'},{name: 'Peach', title: 'A'}] };

/* GET REQUESTS */

//Get All Employees Service Method
self.getEmployees = function(){

    $http.get('/employees')
        .then( function (response) {
            console.log('Get response: ', response.data);
            self.employees.list = response.data;
            console.log('self.employees.list: ', self.games.list);
            
        })
        .catch (function(response) {
            console.log('error on Get: ', response); 
        })

}// end getEmployees







/* POST REQUESTS */









/* PUT REQUESTS */









/* DELETE REQUESTS */








/* FUNCTIONS - Track Employee Controller*/











/* FUNCTIONS - Reports Controller*/
self.salaryMetrics = {};

self.getAverageSalary = function (title) {
    $http.get(`/employees/${title}`)
    .then((result)=>{
        console.log('get avg sal result: ', result);
        self.salaryMetrics.averageSalary = result.averageSalary;
        // self.salaryMetrics.floorSalary = result.floorSalary;
        // self.salaryMetrics.ceilingSalary = result.ceilingSalary;
    })
}





  
}]);