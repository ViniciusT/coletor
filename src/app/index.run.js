(function() {
  'use strict';

  angular
    .module('tp-final')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
