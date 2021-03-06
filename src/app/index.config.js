(function() {
  'use strict';

  angular
    .module('appDdhh')
    .config(config);

  config.$inject = ['$logProvider', 'toastrConfig','$translateProvider'];
  /** @ngInject */
  function config($logProvider, toastrConfig,$translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // angular-translate configuration
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '{part}/i18n/{lang}.json'
    });
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy(null);


  }

})();
