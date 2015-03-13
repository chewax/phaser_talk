var SophiRunner = SophiRunner || {};

SophiRunner.Preload = function () {};

SophiRunner.Preload.prototype = {

  preload: function() {
    this.showLogo();
    this.showLoadBar();

    this.loadAssets();
  },

  create: function() {
  	this.state.start('Menu');
  },

  loadAssets: function() {
  	this.load.image('background', '../assets/background.png');
  	this.load.image('box', '../assets/box.png');
  	this.load.image('floor', '../assets/floor.png');
  	this.load.image('alien', '../assets/alien.png');
  	this.load.image('jump', '../assets/alien_jump.png');
    this.load.audio('theme', '../assets/theme.wav');
  	this.load.spritesheet('alien_walk', 'assets/spritesheet.png', 74, 100);
  },

  showLogo: function () {
  	// Show logo in loading screen
  	this.splash = this.add.sprite(
        this.game.world.centerX,
        this.game.world.centerY,
        'logo'
    );
    this.splash.anchor.setTo(0.5);
  },

  showLoadBar: function () {
    this.preloadBar = this.add.sprite(
        this.game.world.centerX,
        this.game.world.centerY + 128,
        'preloadbar'
    );
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);
  }
};
