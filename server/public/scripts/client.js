let myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/employee-list', {
            templateUrl: '/views/employee-list.html',
            controller: 'TrackEmployeeController as vm'
        })
        .when('/add-employee', {
            templateUrl: '/views/new-employee.html',
            controller: 'AddEmployeeController as vm'
        })
        .when('/reports', {
            templateUrl: '/views/reports.html',
            controller: 'ReportController as vm'
        })
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'HomeController as vm'
        })
        .otherwise(
            { redirectTo: '/home' }
        );
    
});