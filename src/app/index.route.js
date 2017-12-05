(function() {
  'use strict';

  angular
    .module('tp-final')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "app/components/common/content.html"
      })

      .state('index.main', {
        url: "/main",
        templateUrl: "app/main/main.html",
        controller:"MainController",
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('index/main');
  }

})();
