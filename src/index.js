import "./itunes-search/css/geral.css";

// require('./itunes-search/css/geral.css');

import angular from "angular";
import uirouter from "@uirouter/angularjs";

import { config, bootstrap } from "./itunes-search/app/app.config";

import { Detail } from "./itunes-search/app/components/detail.component";
import { Search } from "./itunes-search/app/components/search.component";
import { Music } from "./itunes-search/app/components/music.component";

angular
  .module("itunesSearch", [uirouter])
  .config(config)
  .run(bootstrap)
  .component("cDetail", Detail)
  .component("cSearch", Search)
  .component("cMusic", Music);

//   window.addEventListener(
//     'load',
//     function() {
//       angular.bootstrap(document, ['itunesSearch']);
//     },
//     false
//   );
