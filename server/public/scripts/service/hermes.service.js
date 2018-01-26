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