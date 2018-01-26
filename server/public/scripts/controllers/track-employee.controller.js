myApp.controller('TrackEmployeeController', ['HermesService', function(HermesService) {
    const self = this;






















/* Details Button */

    // self.editStatus = HermesService.editStatus;  ---> once we move to HERMES
    
    self.showDetails = function(){ // place inside details button displayed it has this NGCLICK function.
        self.editStatus = !self.editStatus; //when clicked it can either open the details or close it if they choose.
        
        

    }




}]);
