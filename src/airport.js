
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