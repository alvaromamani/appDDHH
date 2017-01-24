(function() {
  'use strict';

  angular
    .module('appDdhh')
    .controller('MainController', MainController);

  MainController.$inject = ['$timeout','webDevTec','toastr'];
  /** @ngInject */
  /**
   * @name - MainController
   * 
   * @param {any} $timeout ssssssss
   * @param {any} webDevTec ddddddddd
   * @param {any} toastr ffffffff
   */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1482346013491;
    vm.showToastr = showToastr;
    activate();

    /**
     * activate  -dddddddddddddd
     */
    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
