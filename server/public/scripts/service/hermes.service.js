myApp.service('HermesService',['$http', function($http) {
console.log('inside service');
    const self = this;
    self.employeeList = [];


/* GET REQUESTS */









/* POST REQUESTS */
   self.addEmployee = function (employee) {
    $http.post('/employees', employee)
    .then(function(response) {
        console.log('post response', response);
    })
    .catch(function (response) {
        console.log('error on post', response);
    });
   }








/* PUT REQUESTS */









/* DELETE REQUESTS */








/* FUNCTIONS - Track Employee Controller*/











/* FUNCTIONS - Reports Controller*/







  
}]);