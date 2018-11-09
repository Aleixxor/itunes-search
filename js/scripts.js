var routes = angular.module('itunesSearch', ['ui.router']);

routes.config(function($stateProvider){

    var response = {
        name: 'response',
        url: '/pagina',
    };

    $stateProvider.state(response);
    
});

angular.module("itunesSearch").controller("itunesSearchCtrl", function($scope, $http){
    $scope.loadResults = loadResults;
    $scope.pesquisa = function()
    {
        console.log("aaaa");
        $http.get("http://localhost:5000/api/iTunes/search?term="+$scope.input).then(function(res){
            
            _result = res.data.results;

            loadResults(0);
            
            var _val = ($scope.result.length % 10 ? 1 : 0)
            var _limitTo = Math.round($scope.result.length/10+_val);
            $scope.paginacao = [];
            for(var _c = 0; _c < _limitTo; _c++){$scope.paginacao.push(_c+1);}
        })
    };
    var _result = [];

    function loadResults(_pagina)
    {
        $scope.result = _result.slice(_pagina*10,_pagina*10+10);
    }
});