var FireBallManager = function(stage) {
	this.stage = stage;
	this.game = stage.game;
	this.nextBallTime = 0;

	this.createGroup();
}

/**
 * Create the tiles group for the coins.
 */
FireBallManager.prototype.createGroup = function () {
	this.group = this.game.add.group();

	// Enable physics for the boxes group.
	this.game.physics.arcade.enable(this.group);
	this.group.enableBody = true;

	// Autokill boxes out of boundaries.
	this.group.outOfBoundsKill = true;
	this.group.exists = true;
	// this.group.z = 49;
};


/**
 * Create one coin in the given cell.
 *
 * @param {number} position: Vertical position of the coin in the grid.
 */
FireBallManager.prototype.create = function () {


	// Define the position of the new coin.
	var x = Math.round(Math.random() * this.game.width),
		y = this.game.heigh + 60;
	
	var tile = this.group.create(x, y, 'fireball');

	tile.body.immovable = false;
	tile.body.gravity.y = 1200;
	tile.body.velocity.x = this.stage.levelSpeed - 200;

	tile.soundfx = this.game.add.audio('coinfx');
	tile.soundfx.loop = false;
	tile.soundfx.volume = 1;


	return tile;
};


/**
 * Generate new coins for the map.
 */
FireBallManager.prototype.generate = function () {

	// Wait some time between boxes creation.
	if (this.game.time.time < this.nextCoinTime)
		return;

	this.create();

	// Update the next box time.
	this.nextCoinTime = this.game.time.time + 400 * Math.round(Math.random() * 0.1);
};