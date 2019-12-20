
'use strict';

function Airport(){
  this._hangar = [];
}
Airport.prototype.planes = function(){
  return this._hangar
}
Airport.prototype.landingPermitted = function(plane){
  this._hangar.push(plane);
}
Airport.prototype.takeoffPermitted = function(plane){
  if (this.isStormy()) {
    throw new Error('Sorry, takeoff not permitted during storm')
  }
  this._hangar = []
}
Airport.prototype.isStormy = function(){
  return false
}