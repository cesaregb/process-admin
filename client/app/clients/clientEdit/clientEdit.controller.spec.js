'use strict';

describe('Component: ClientEditComponent', function () {

  // load the controller's module
  beforeEach(module('processAdminApp'));

  var ClientEditComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ClientEditComponent = $componentController('ClientEditComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});