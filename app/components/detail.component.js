(function () {
    const app = angular.module('itunesSearch');

    const detail = {
        templateUrl: 'app/components/detail.html',
        controller: DetailCtrl,
        bindings: {
            $transition$: '<'
        }
    };

    function DetailCtrl ($http) {
        let params = {};

        this.details = {};

        this.$onInit = () => {
            params = this.$transition$.params();
            loadDetails();
        };

        const loadDetails = () =>
            $http.get("http://localhost:5000/api/iTunes/search?term=" + params.trackId)
                .then(res => this.details = res.data.results[0]);
    }

    app.component('cDetail', detail);
})();