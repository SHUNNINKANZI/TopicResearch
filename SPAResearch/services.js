/// <reference path="C:\Users\sonphan\documents\visual studio 2015\Projects\SPAResearch\SPAResearch\Scripts/angular.js" />

var CustomerService = angular.module('CustomerService', [])
CustomerService.factory('CustomerApi', function ($http) {
    var urlBase = "http://localhost:55931/api";
    var CusApi = {};
    CusApi.getCustomers = function () {
        return $http.get(urlBase + '/Customers');
    };
    CusApi.deleteCustomers = function (empsId) {
        console.log(JSON.stringify(empsId));
        var id = JSON.stringify(empsId);
      //  $http.delete(urlBase+'/Customers/DeleteCustomer', JSON.stringify(empsId))
       // return $http.delete(urlBase + '/Customers/DeleteCustomer', { id: JSON.stringify(empsId) });
        //return $http.post(urlBase + '/Customers/DeleteCustomer', (empsId));
        var request = $http({
            method: 'delete',
          
            url: urlBase + '/Customers/'+empsId ,
          
        });

        return request;
    };
    return CusApi;
});


