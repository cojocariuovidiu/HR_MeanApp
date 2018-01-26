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
self.showDetails = function(employee){

    employee.detailsStatus = !employee.detailsStatus; //when clicked it can either open the details or close it if they choose.
    
    $http.put(`/employees/submit/${employee._id}`, employee)
        .then(function (response) {
            // console.log('get response', response);
            self.getEmployees(); 
        })
        .catch(function (response) {
            console.log('error on put update detailStatus', response);
        });
}


self.submitButton = function(employee) {
    $http.put(`/employees/submit/${employee._id}`, employee)
    .then(function (response) {
        // console.log('get response', response);
        self.getEmployees(); 
    })
    .catch(function (response) {
        console.log('error on put update employee details', response);
    });
}

self.pageRefresh = function() {
    $http.put(`/employees/refresh`)
    .then(function (response) {
        console.log('Page Refreshed');
        self.getEmployees(); 
    })
    .catch(function (response) {
        console.log('error on put update employee details', response);
    });
}



/* DELETE REQUESTS */

self.terminateEmployee = function(id) {
    $http.delete(`/employees/${id}`)
        .then(function (response) {
            // console.log('get response', response);
            self.getEmployees();
        })
        .catch(function (response) {
            console.log('error on delete game', response);
        });
};






/* FUNCTIONS - Track Employee Controller*/











/* FUNCTIONS - Reports Controller*/
self.salaryMetrics = {};

self.getAverageSalary = function (title) {
    $http.get(`/employees/${title}`)
    .then((result)=>{
        console.log('get avg sal result: ', result.data);
        self.salaryMetrics.list = result.data;
        console.log(self.salaryMetrics);
        
        
    })
}





  
}]);