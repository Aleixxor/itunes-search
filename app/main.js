(function () {
    const app = angular.module('itunesSearch', ['ui.router']);

    app.config(function ($stateProvider, $urlServiceProvider) {
        const states = [
            {
                name: 'search',
                url: '/search?term&page',
                component: 'cSearch',
                params: {
                    term: {
                        dynamic: true
                    }
                },
                page: {
                    dynamic: true
                }
            },
            {
                name: 'detail',
                url: '/detail/:trackId',
                component: 'cDetail',
                params: {
                    trackId: {
                        type: 'int'
                    }
                }
            }
        ];

        states.forEach(state => $stateProvider.state(state));

        $urlServiceProvider.rules.otherwise({ state: 'search' });
    });
})();