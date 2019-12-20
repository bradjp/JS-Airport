'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('has no planes initially', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('with clear conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
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

  describe('with stormy conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('does not permit landing', function(){
      expect(function(){ airport.landingPermitted(plane); }).toThrowError('Sorry, landing not permitted during storm');
    });
    it('does not permit takeoff', function(){
      expect(function(){ airport.takeoffPermitted(plane); }).toThrowError('Sorry, takeoff not permitted during storm');
    });
  });
});