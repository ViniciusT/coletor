'use strict';

angular.module('tp-final')
  .controller('MainController', function ($rootScope, $http) {
    var vm = this;
    vm.artigos = [];
    vm.query = '';
    vm.model = 1;
    vm.artigos = vm.bm1;
    $rootScope.$watch('filter', function () {
      if($rootScope.filter && (vm.model !== $rootScope.filter)){
        vm.model = $rootScope.filter;
        vm.query = '';
        vm.artigos = [];
        // console.log(vm.model);
      }

    });
    vm.doRequest = function () {
      var encode = encodeURIComponent(vm.query);
      var sendModel = vm.model;
      console.log(sendModel);
      $http({
        method: 'GET',
        url: 'http://localhost:8080/busca?model=' + sendModel + '&query=' + encode
      }).then(function successCallback(response) {
         vm.artigos = response;
      }, function errorCallback(response) {

      });
    };


  });
