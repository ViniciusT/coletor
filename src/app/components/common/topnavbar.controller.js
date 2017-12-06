/**
 * Created by vinicius on 4/24/17.
 */
'use strict';

angular.module('tp-final')
  .controller('TopNavController', function ($rootScope, $state) {
    var vm = this;
    vm.showBox = false;
    $rootScope.filter = 1;
    vm.selectedValue = 'Bool And';
    vm.notselectedValue = ['Bool And', 'Bool Or', 'Vetorial', 'BM25'];
    vm.state = $state.current.name;
    vm.functBox = function (index) {
      vm.showBox = false;
      vm.selectedValue = vm.notselectedValue[index];
      $rootScope.filter = index+1;
    }
  });
