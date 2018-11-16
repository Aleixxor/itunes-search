class SearchCtrl {
  constructor($http, $state, $transitions) {
    "ngInject";
    let _result = [];
    this.result = [];
    this.params = {};
    let _page = 0;
    this.$onInit = () => {
      console.log("Entrando na função $onInit");
      this.deregisterHook = $transitions.onRetain(
        {
          retained: "search"
        },
        tr => this.activate(tr)
      );
      this.activate(this.$transition$);
      console.log("Saindo da função $onInit");
    };

    this.$onDestroy = () => this.deregisterHook();
    this.loadResults = _pagina => {
      console.log("Entrando na função loadResults");
      this.result = _result.slice(_pagina * 10, _pagina * 10 + 10);
      console.log(this.result);
      console.log(_pagina);

      $state.go("itunesSearch.search", {
        term: this.params.term,
        page: _pagina--
      });
    };

    this.pesquisa = () => console.log("Entrando na função pesquisa");
    $state.go("itunesSearch.search", { term: this.params.term });

    this.activate = tr => {
      console.log("Entrando na função activate");

      console.log(tr);

      this.params = Object.assign({}, tr.params());
      console.log(this.params.term);

      this.params.term &&
        $http
          .get(
            "http://localhost:5000/api/iTunes/search?term=" + this.params.term
          )
          .then(res => {
            console.log(res.data);
            if (this.params.page) {
              _page = this.params.page;
            }
            _result = res.data.results;
            this.loadResults(_page);
            pagination();
          });
    };

    const pagination = () => {
      console.log("Entrando na função pagination");
      const _val = _result % 10 ? 1 : 0;
      const _limitTo = Math.round(_result.length / 10 + _val);
      this.paginacao = [];
      for (let _c = 0; _c < _limitTo; _c++) {
        this.paginacao.push(_c + 1);
      }
    };
  }
}

export const Search = {
  template: require("./search.html"),
  controller: SearchCtrl,
  controllerAs: "vm",
  bindings: {
    $transition$: "<"
  }
};
