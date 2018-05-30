/*
Adapted from donmccurdy
https://jsfiddle.net/donmccurdy/68ofbvp6/
*/

AFRAME.registerComponent('proximity-trigger', {
  schema: {
    distance: {default: 1, min: 0},
    target: {default: 'a-camera'}
  },
  init: function () {
    this.triggered = false;
    this.el.sceneEl.addBehavior(this);
  },
  tick: function () {
    var target = this.el.sceneEl.querySelector(this.data.target);
    var targetPos = target.object3D.position;
    //console.log(targetPos);
    var thisPos = this.el.object3D.position;
    if (!this.triggered && thisPos.distanceTo(targetPos) < this.data.distance) {
      this.triggered = true;
      this.el.emit('playerenter');
      console.log('Player entered checkpoint');
    } else if (this.triggered && thisPos.distanceTo(targetPos) >= this.data.distance) {
      this.triggered = false;
      this.el.emit('playerleave');
      console.log('Player left checkpoint');
    }
  
  }

})