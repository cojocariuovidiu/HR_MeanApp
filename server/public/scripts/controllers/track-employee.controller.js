myApp.controller('TrackEmployeeController', ['HermesService', function(HermesService) {
    const self = this;
    // Place Holder Array for testing output to DOM.
    //This will need to be bound to Hermes in order to keep it up-to-date.
    // Data bind to HermesService:  self.employees = HermesService.games;
    self.employees = [

            {
                firstName: 'Lukas',
                lastName: 'Nord',
                employeeId: 1234,
                title: 'Programmer',
                salary: 10000,
                
            },
            {
                firstName: 'Patrick',
                lastName: 'Connelly',
                employeeId: 4321,
                title: 'Software Developer',
                salary: 11000,
            },
            {
                firstName: 'Darian',
                lastName: 'Nasrabadi',
                employeeId: 500,
                title: 'Software Engineer',
                salary: 12000,
            },
            {
                firstName: 'Alaethia',
                lastName: 'Dvoracek',
                employeeId: 800,
                title: 'Engineering Programmer',
                salary: 13000,
            }
    ];
























/* Details Button */












}]);
