'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  it('begins with no planes', function(){
    expect(airport.planes()).toEqual([]);
  });
  it('can sanction landing', function(){
    airport.landingPermitted(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can sanction takeoff', function(){
    airport.landingPermitted(plane);
    airport.takeoffPermitted(plane);
    expect(airport.planes()).toEqual([]);
  });
});