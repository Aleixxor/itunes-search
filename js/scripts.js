var routes = angular.module('itunesSearch', ['ui.router']);

routes.config(function($stateProvider){

    var response = {
        name: 'response',
        url: '/pagina',
    };

    $stateProvider.state(response);
    
});

angular.module("itunesSearch").controller("itunesSearchCtrl", function($scope){
    $scope.loadResults = loadResults;
   
    _result = [
        {musica: "Musica 1", artista: "Artista 1", album: "Album 1"},
        {musica: "Musica 2", artista: "Artista 1", album: "Album 2"},
        {musica: "Musica 3", artista: "Artista 1", album: "Album 3"},
        {musica: "Musica 4", artista: "Artista 1", album: "Album 4"},
        {musica: "Musica 5", artista: "Artista 1", album: "Album 5"},
        {musica: "Musica 6", artista: "Artista 1", album: "Album 6"},
        {musica: "Musica 7", artista: "Artista 1", album: "Album 7"},
        {musica: "Musica 8", artista: "Artista 1", album: "Album 8"},
        {musica: "Musica 9", artista: "Artista 1", album: "Album 9"},
        {musica: "Musica 10", artista: "Artista 1", album: "Album 10"},
        {musica: "Musica 11", artista: "Artista 1", album: "Album 11"},
        {musica: "Musica 12", artista: "Artista 1", album: "Album 12"},
        {musica: "Musica 13", artista: "Artista 1", album: "Album 1"},
        {musica: "Musica 14", artista: "Artista 1", album: "Album 2"},
        {musica: "Musica 15", artista: "Artista 1", album: "Album 3"},
        {musica: "Musica 16", artista: "Artista 1", album: "Album 4"},
        {musica: "Musica 17", artista: "Artista 1", album: "Album 5"},
        {musica: "Musica 18", artista: "Artista 1", album: "Album 6"},
        {musica: "Musica 19", artista: "Artista 1", album: "Album 7"},
        {musica: "Musica 20", artista: "Artista 1", album: "Album 8"},
        {musica: "Musica 21", artista: "Artista 1", album: "Album 9"},
        {musica: "Musica 22", artista: "Artista 1", album: "Album 10"},
        {musica: "Musica 23", artista: "Artista 1", album: "Album 11"},
        {musica: "Musica 24", artista: "Artista 1", album: "Album 12"}
    ];

    $scope.result = _result;
    
    var _val = ($scope.result.length % 10 ? 1 : 0)
    var _limitTo = Math.round($scope.result.length/10+_val);
    $scope.paginacao = [];
    for(var _c = 0; _c < _limitTo; _c++){$scope.paginacao.push(_c+1);}

    function loadResults(_pagina)
    {
        console.log(_pagina);
        $scope.result = _result.slice(_pagina*10,_pagina*10+10);
    }
});