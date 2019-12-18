'use strict';

describe('Plane',function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['landingPermitted', 'takeoffPermitted']);
  });
  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.landingPermitted).toHaveBeenCalledWith(plane);
  });
  it('can takeoff from an airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.takeoffPermitted).toHaveBeenCalled();
  });
});