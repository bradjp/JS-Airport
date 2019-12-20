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
  it('can check if conditions are stormy', function(){
    expect(airport.isStormy()).toBeFalsy();
  });
  describe('stormy conditions',function(){
    it('planes are not permitted to takeoff', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ airport.takeoffPermitted(plane); }).toThrowError('Sorry, takeoff not permitted during storm');
    });
  });
});