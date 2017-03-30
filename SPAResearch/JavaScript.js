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
MyApp.controller("DeleteController", function ($scope,CustomerApi) {
    $scope.message = "deleteview";
    

});
MyApp.controller("HomeController", function ($scope, CustomerApi) {
    
    getCustomers();
    $scope.customers = [];

    function getCustomers() {
        CustomerApi.getCustomers()
        .then(function (customers)
        {
            console.log(customers);
            $scope.customers.data = customers.data;
        },function(error){
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
        $scope.selected = [];

        $scope.toggle = function (item, list) {
         
            var idx = list.indexOf(item);
            if (idx > -1) {

                list.splice(idx, 1);
            }
            else {
              
                list.push(item);
            }

        };
        $scope.exists = function (item, list) {
            return list.indexOf(item) > -1;
        };

        //Check All Customer to delete
        $scope.checkAll = function (customersData) {
            if (!$scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
                $scope.selected = [];
            }
            angular.forEach(customersData, function (value,key) {
                $scope.Selected = $scope.selectedAll;
                if ($scope.selectedAll) {
                    $scope.selected.push(value["CustomerID"]);
                }
            });
        }
       
    }
    $scope.delete = function (items) {
        if (confirm("Do you want to delete ?")) {
            CustomerApi.deleteCustomers(items).then(function () {
                getCustomers();
            },function(error){
                $scope.status = "Something wrong : " + error.message;
            })
        }
        
    };
    
});