var SophiRunner = SophiRunner || {};

SophiRunner.Game = function (){};

//setting game configuration and loading the assets for the loading screen
SophiRunner.Game.prototype = {
	preload: function () {
		this.game.tileSize = 70;
	},
	
	create: function () {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.stage = new Stage(this.game);
		this.player = new Player(this.game);

		//Capture Cursors;
    upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    fireKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	},

	update: function () {
		this.game.physics.arcade.collide(this.stage.floors, this.player.sprite);

		if (upKey.isDown){
			this.player.jump();
		}
	}

};