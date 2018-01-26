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
            console.log('self.employees.list: ', self.games.list);
            
        })
        .catch (function(response) {
            console.log('error on Get: ', response); 
        })

}// end getEmployees

/* POST REQUESTS */

//POST new employee to the server. 
self.addEmployee = function(employee) {
   
        $http.post('/employees', employee)
            .then( function (response) {
                console.log('Post response ', response);
                
            })
            .catch (function(response) {
                console.log('error on Post: ', response); 
            })

}// end addEmployee







/* PUT REQUESTS */









/* DELETE REQUESTS */








/* FUNCTIONS - Track Employee Controller*/











/* FUNCTIONS - Reports Controller*/







  
}]);