/// <reference path="C:\Users\sonphan\documents\visual studio 2015\Projects\SPAResearch\SPAResearch\Scripts/angular.js" />

var CustomerService = angular.module('CustomerService', [])
CustomerService.factory('CustomerApi', function ($http) {
    var urlBase = "http://localhost:55931/api";
    var CusApi = {};
    CusApi.getCustomers = function () {
        return $http.get(urlBase + '/Customers');
    };
    return CusApi;
});
