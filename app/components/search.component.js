(function () {
    'use strict';

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

        this.$onInit = () => {
            this.params = Object.assign({}, this.$transition$.params());
            this.params.term && this.pesquisa();
        };

        this.loadResults = _pagina => this.result = _result.slice(_pagina * 10, _pagina * 10 + 10);

        this.pesquisa = () => $state.go('search', {term: this.params.term});
            $http.get("http://localhost:5000/api/iTunes/search?term=" + this.params.term)
                .then(res => {
                    _result = res.data.results;
                    this.loadResults(0);
                    paginacao();
                });

        const paginacao = () => {
            const _val = (this.result.length % 10 ? 1 : 0)
            const _limitTo = Math.round(this.result.length / 10 + _val);
            this.paginacao = [];
            for (let _c = 0; _c < _limitTo; _c++) { this.paginacao.push(_c + 1); }
        }
    }

    // FABIANO'S CODE

    // $onInit() {
    //     this.deregisterHook = this.$transitions.onRetain(
    //       {
    //         retained: 'app.posts.userPosts'
    //       },
    //       tr => this.activate(tr)
    //     );
    
    //     this.activate(this.$transition$);
    //   }
    
    //   $onDestroy() {
    //     this.deregisterHook();
    //   }
    
    //   activate(transition) {
    //     this.params = Object.assign({}, transition.params());
    //     this.getPosts();
    //   }

    app.component('cSearch', search);
})();