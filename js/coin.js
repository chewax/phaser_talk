var CoinManager = function(stage) {
	this.stage = stage;
	this.game = stage.game;
	this.nextCoinTime = 0;

	this.createGroup();
}

/**
 * Create the tiles group for the coins.
 */
CoinManager.prototype.createGroup = function () {
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
CoinManager.prototype.create = function (position) {

	var position = position || 1,
        groundLevel = this.game.world.height - this.game.tileSize,
        yOffset = this.game.tileSize * position;

    // Define the position of the new coin.
    var x = this.game.width,
        y = groundLevel - yOffset;
    
    var tile = this.group.create(x, y, 'coin');

	tile.body.immovable = true;
	tile.body.velocity.x = this.stage.levelSpeed;

	tile.soundfx = this.game.add.audio('coinfx');
    tile.soundfx.loop = false;
    tile.soundfx.volume = 1;

	return tile;
};


/**
 * Generate new coins for the map.
 */
CoinManager.prototype.generate = function () {

    // Wait some time between boxes creation.
    if (this.game.time.time < this.nextCoinTime)
        return;

    this.create(Math.round(Math.random() * 4));

    // Update the next box time.
    this.nextCoinTime = this.game.time.time + 400 * Math.round(Math.random() * 2);
};