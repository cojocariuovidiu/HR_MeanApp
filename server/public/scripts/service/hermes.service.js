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
//Call the GET here.
self.getEmployees();


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
self.showDetails = function(employee){

    employee.detailsStatus = !employee.detailsStatus; //when clicked it can either open the details or close it if they choose.
    
    $http.put(`/employees/${employee._id}`, employee)
        .then(function (response) {
            // console.log('get response', response);
            self.getEmployees(); 
        })
        .catch(function (response) {
            console.log('error on put update detailStatus', response);
        });
}


self.submitButton = function(employee) {
    $http.put(`/employees/${employee._id}`, employee)
    .then(function (response) {
        // console.log('get response', response);
        self.getEmployees(); 
    })
    .catch(function (response) {
        console.log('error on put update employee details', response);
    });
}

// Need to fix mongoose syntax to update all status.
// self.pageRefresh = function() {
//     $http.put(`/employees/refresh`)
//     .then(function (response) {
//         console.log('Page Refreshed');
//         self.getEmployees(); 
//     })
//     .catch(function (response) {
//         console.log('error on put update employee details', response);
//     });
// }



/* DELETE REQUESTS */








/* FUNCTIONS - Track Employee Controller*/











/* FUNCTIONS - Reports Controller*/







  
}]);