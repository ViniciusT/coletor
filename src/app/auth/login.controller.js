/**
 * Created by vinicius on 4/24/17.
 */
'use strict';

angular.module('tp-final').controller('LoginController', function ($state) {

    var vm = this;

    vm.user = {};

    vm.button = function () {
      
      if (vm.user.password.length >= 6) {
        return true
      } else {
        return false;
      }

    };

    vm.auth = function () {
      
      localStorage.setItem("user", "aluno");
      $state.go('index.main');

    }

    vm.adm = function () {
      $state.go('loginAdm');
    }

  });
