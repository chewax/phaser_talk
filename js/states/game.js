var SophiRunner = SophiRunner || {};

SophiRunner.Game = function (){};

//setting game configuration and loading the assets for the loading screen
SophiRunner.Game.prototype = {
  preload: function () {
  	this.game.tileSize = 70;
  },
  
  create: function () {
  	this.stage = new Stage(this.game);
  },

  update: function () {
  	this.stage.recycleFloor();
  	
  }

};