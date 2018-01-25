let myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/employee-list', {
            templateUrl: '/views/employee-list.html',
            controller: 'whateverControllerthisis as vm'
        })
        .when('/new-employee', {
            templateUrl: '/views/new-employee.html',
            controller: 'whateverControllerthisis as vm'
        })
        .when('/reports', {
            templateUrl: '/views/reports.html',
            controller: 'whateverControllerthisis as vm'
        })
        .otherwise(
            { redirectTo: '/new-employee' }
        );
    
});