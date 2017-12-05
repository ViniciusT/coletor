/**
 * Created by vinicius on 4/24/17.
 */
'use strict';

angular.module('tp-final')
  .controller('TopNavController', function ($rootScope, $state) {
    var vm = this;
    vm.showBox = false;
    $rootScope.filter = 'BM1';
    vm.selectedValue = 'BM1';
    vm.notselectedValue = 'BM25';
    vm.state = $state.current.name;
    vm.functBox = function () {
      vm.showBox = false;
      var aux  = vm.selectedValue;
      vm.selectedValue = vm.notselectedValue;
      vm.notselectedValue = aux;
      $rootScope.filter = vm.selectedValue;
    }
  });
