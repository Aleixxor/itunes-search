(function () {
    //'use strict';

    const app = angular.module('itunesSearch');

    const search = {
        templateUrl: 'app/components/search.html',
        controller: MainController,
        controllerAs: 'vm',
        bindings: {
            $transition$: '<'
        }
    };

    function MainController($http, $state, $transitions) {
        let _result = [];
        this.result = [];
        this.params = {};
        let _page = 0;
        
        this.$onInit = () => {
            // console.log(this);
            this.deregisterHook = $transitions.onRetain(
                {
                    retained: 'search'
                },
                tr => this.activate(tr)
            );
            this.activate(this.$transition$);
        };

        this.$onDestroy = () => this.deregisterHook();
        this.loadResults = _pagina => {
            this.result = _result.slice(_pagina * 10, _pagina * 10 + 10); 
            $state.go('search', {term: this.params.term, page: _pagina--});
        }

        this.pesquisa = () => $state.go('search', {term: this.params.term});

        this.activate = tr => {
            this.params = Object.assign({}, tr.params());

            this.params.term && $http.get("http://localhost:5000/api/iTunes/search?term=" + this.params.term)
                .then(res => {
                    if(this.params.page) {
                        _page = this.params.page;
                    }
                    _result = res.data.results;
                    this.loadResults(_page);
                    pagination();
                });
            }

        const pagination = () => {
            const _val = (_result % 10 ? 1 : 0)
            const _limitTo = Math.round(_result.length / 10 + _val);
            this.paginacao = [];
            for (let _c = 0; _c < _limitTo; _c++) { this.paginacao.push(_c + 1); }
        }
    }

    app.component('cSearch', search);
})();