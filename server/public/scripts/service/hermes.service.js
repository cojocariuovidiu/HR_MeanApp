myApp.service('HermesService',['$http', function($http) {
console.log('inside service');
    const self = this;
    self.employees = { list: [] };

/* GET REQUESTS */

//Get All Employees Service Method
self.getEmployees = function(){

    $http.get('/employees')
        .then( function (response) {
            console.log('Get response: ', response.data);
            self.employees.list = response.data;   
        })
        .catch(function(response) {
            console.log('error on Get: ', response); 
        });
}// end getEmployees

//Call the GET here.
self.getEmployees();

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