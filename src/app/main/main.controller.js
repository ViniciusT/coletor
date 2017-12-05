'use strict';

angular.module('tp-final')
  .controller('MainController', function ($rootScope) {
    var vm = this;
    vm.artigos = [];
    vm.bm1 = [
      {
        title: 'titleBM1',
        id:"1",
        description:"sokdaok kaosdk asodk asokokd asokd o doaskd okda"
      },
      {
        title: 'title2BM1',
        id:"2",
        description:"sokdaok kaosdk asodk asokokd asokd o doaskd okda"
      },
      {
        title: 'title3BM1',
        id:"3",
        description:"sokdaok kaosdk asodk asokokd asokd o doaskd okda"
      }
    ];
    vm.bm ='BM1';
    vm.artigos = vm.bm1;
    $rootScope.$watch('filter', function () {
      if($rootScope.filter && (vm.bm !== $rootScope.filter)){
        vm.bm = $rootScope.filter;
        if($rootScope.filter === 'BM1'){
          vm.artigos = vm.bm1;
        }
        else{
          vm.artigos = vm.bm25;
        }
      }

    });

    vm.bm25 = [
      {
        title: 'title',
        id:"1",
        description:"sokdaok kaosdk asodk asokokd asokd o doaskd okda"
      },
      {
        title: 'title2',
        id:"2",
        description:"sokdaok kaosdk asodk asokokd asokd o doaskd okda"
      },
      {
        title: 'title3',
        id:"3",
        description:"sokdaok kaosdk asodk asokokd asokd o doaskd okda"
      }
    ];
  });
