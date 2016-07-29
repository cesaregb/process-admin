'use strict';

angular.module('processAdminApp', [
    'processAdminApp.auth',
    'processAdminApp.admin',
    'processAdminApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'validation.match',
    'angular-noty',
    'formly',
    'formlyBootstrap',
    'angular-confirm',
    'ngMaterial',
    'ui.select',
    'ngSanitize',
    'angular-loading-bar',
    'ngTable',
    'ui.bootstrap.datetimepicker'
  ])
  .config(function($urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    // configure loading-bar
    // cfpLoadingBarProvider.parentSelector = '#loadingContainer';
    // cfpLoadingBarProvider.latencyThreshold = 500;
    cfpLoadingBarProvider.includeSpinner = false;
    // cfpLoadingBarProvider.spinnerTemplate = '<div class="spinning-wheel-container"><div class="spinning-wheel"></div></div>';
  }).run(function($location, $log, constants){
    var url = $location.absUrl();
    if (url.indexOf('localhost') > 0){
      constants.API_ENDPOINT = constants.LOCAL_API_ENDPOINT;
    }else if (url.indexOf('52.6.82.228') > 0){ // dev elastic ip "52.6.82.228"
      constants.API_ENDPOINT = constants.DEV_API_ENDPOINT;
    }else{
      constants.API_ENDPOINT = constants.PROD_API_ENDPOINT;
    }
    $log.info('[run] Services URI: ' + constants.API_ENDPOINT);
  });
