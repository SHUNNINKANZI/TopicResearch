/// <reference path="c:\users\sonphan\documents\visual studio 2015\Projects\SPAResearch\SPAResearch\Scripts/angular.js" />

var MyApp = angular.module("MyApp", ['ngRoute', 'CustomerService']);

MyApp.config(['$routeProvider',
    function ($routeProvider) {
       
        $routeProvider.
        when('/Add', {
            templateUrl: 'View/add.html',
            controller: 'AddController'
        }).
        when('/Edit', {
            templateUrl: 'View/edit.html',
            controller: 'EditController'
        }).
        when('/Delete', {
            templateUrl: 'View/delete.html',
            controller: 'DeleteController'
        }).
        when('/', {
            templateUrl: 'View/home.html',
            controller: 'HomeController'
        }).
        otherwise({
            redirectTo: '/'
        });
       
    }]);

MyApp.controller("AddController", function ($scope)
{
    $scope.message = "Addview";
});
MyApp.controller("EditController", function ($scope) {
    $scope.message = "Editview";
});
MyApp.controller("DeleteController", function ($scope) {
    $scope.message = "deleteview";
});
MyApp.controller("HomeController", function ($scope, CustomerApi) {
   
    getCustomers();
    $scope.customers = [];
    function getCustomers() {
        CustomerApi.getCustomers()
        .then(function (customers)
        {
            $scope.customers.data = customers.data;
        })
        //.error(function(error)
        //{
        //    $scope.status = 'Unable to load customer data: ' + error.message;

        //})
    }
});