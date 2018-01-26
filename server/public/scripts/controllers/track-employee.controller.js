myApp.controller('TrackEmployeeController', ['HermesService', function(HermesService) {
    const self = this;

    
    self.editStatus = HermesService.editStatus;
    
    self.showDetails = function(){
        self.editStatus = !self.editStatus; //when clicked it can either open the details or close it if they choose.
    
    }


}]);
