(function () {
    const app = angular.module('itunesSearch');

    const music = {
        templateUrl: 'app/components/music.html',
        bindings: {
            musica: '<'
        }
    };

    app.component('cMusic', music);
})();