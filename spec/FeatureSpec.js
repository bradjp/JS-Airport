'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('can be instruct planes to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  it('can instruct planes to takeoff', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });
  it('prevents takeoff when weather is stormy', function(){
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('Sorry, takeoff not permitted during storm');
    expect(airport.planes()).toContain(plane);
  });
});