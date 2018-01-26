myApp.controller('AddEmployeeController', ['HermesService', function(HermesService) {
    const self = this;
    self.addEmplopyee = {};
    
    

    self.addEmployee = function(employee) {
        $http.post('/add-employee', employee)
            .then(function(response) {
                console.log('post response', response);
            })
            .catch(function (response) {
                console.log('error on post', response);
            });
    }


}]);
