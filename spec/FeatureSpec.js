'use strict';

describe('Feature Test: ', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe('with clear conditions',function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });

    it('can instruct planes to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('can instruct planes to takeoff', function(){
      plane.land(airport)
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('with stormy conditions',function(){

    it('prevents takeoff when weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport)
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff();}).toThrowError('Sorry, takeoff not permitted during storm');
      expect(airport.planes()).toContain(plane);
    });

    it('prevents landing when weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(1);
      expect(function(){ plane.land(airport); }).toThrowError('Sorry, landing not permitted during storm');
      expect(airport.planes()).toEqual([]);
    });
  });
});