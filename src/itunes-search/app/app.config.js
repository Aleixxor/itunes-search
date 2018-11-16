import { Visualizer } from "@uirouter/visualizer";

import { search, detail, root } from "./app.states";

export function config($stateProvider, $urlServiceProvider) {
  "ngInject";
  const states = [search, detail, root];
  states.forEach(state => $stateProvider.state(state));

  $urlServiceProvider.rules.otherwise({ state: "search" });
}

export function bootstrap($uiRouter) {
  "ngInject";
  $uiRouter.plugin(Visualizer);
}
