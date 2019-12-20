'use strict';

function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.landingPermitted = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('Sorry, landing not permitted during storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.takeoffPermitted = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('Sorry, takeoff not permitted during storm');
  }
  this._hangar = [];
};