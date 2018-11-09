var routes = angular.module('itunesSearch', ['ui.router']);

routes.config(function($stateProvider){

    
    var response = {
        name: 'response',
        url: '/testUrl',
        templateUrl: '../views/template/response.html'
    }

    $stateProvider.state(response);

});