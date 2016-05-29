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
    // 'formlyMaterial',
    'angular-confirm',
    'ngMaterial'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
