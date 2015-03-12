var SophiRunner = SophiRunner || {};

SophiRunner.Preload = function () {};

SophiRunner.Preload.prototype = {

  preload: function() {
  	//show logo in loading screen
  	this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

  	//load game assets
  },
  
  create: function() {
  	this.state.start('Menu');
  }
};