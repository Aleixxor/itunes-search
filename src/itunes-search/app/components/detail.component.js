class DetailCtrl {
    constructor($http) {
        'ngInject';
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
}

export const Detail = {
    template: require('./detail.html'),
    controller: DetailCtrl,
    bindings: {
      $transition$: '<'
    }
};