myApp.controller('TrackEmployeeController', ['HermesService', function(HermesService) {
    const self = this;
    self.editStatus = false; //to show/hide edit status universal to controller
    self.tableStatus = true; //to show/hide table status universal to controller
    HermesService.pageRefresh()
    // Data bind to HermesService:  
    self.employees = HermesService.employees;
    

/* Details Button */

    self.showDetails = function(employee){ // place inside details button displayed it has this NGCLICK function.
        HermesService.showDetails(employee)
        self.tableStatus = false;
        self.testStatus = !self.testStatus;
    }

    self.showEditStatus = function() {
        self.editStatus = !self.editStatus; //when clicked it can either open the details or close it if they choose.
    }

    self.closeButton = function(employee) {
        self.tableStatus = true; //when clicked it can either open the details or close it if they choose.
        HermesService.showDetails(employee)
    }

    self.submitButton = function(employee) {
        HermesService.submitButton(employee)
        self.editStatus = false;
    }


}]);
