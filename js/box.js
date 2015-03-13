var BoxManager = function (stage) {
    this.stage = stage;
    this.game = stage.game;
    this.nextBoxTime = 0;

    // Create the tiles group.
    this.createGroup();

};


/**
 * Create the tiles group for the boxes.
 */
BoxManager.prototype.createGroup = function () {
    this.group = this.game.add.group();

    // Enable physics for the boxes group.
    this.game.physics.arcade.enable(this.group);
    this.group.enableBody = true;

    // Autokill boxes out of boundaries.
    this.group.outOfBoundsKill = true;
    this.group.exists = true;
    // this.group.z = 50;
};


/**
 * Create one box in the given cell.
 *
 * @param {number} position: Vertical position of the box in the grid.
 */
BoxManager.prototype.create = function (position) {

	var position = position || 1,
        groundLevel = this.game.world.height - this.game.tileSize,
        yOffset = this.game.tileSize * position;

    // Define the position of the new box.
    var x = this.game.width,
        y = groundLevel - yOffset;

    // Get the last box that went out of boundaries.
    var tile = this.group.getFirstExists(false);

    // If there is no available box, create a new one.
    if (!tile)
        tile = this.group.create(x, y, 'box');

	tile.body.immovable = true;
	tile.body.velocity.x = this.stage.levelSpeed;

	return tile;
};


/**
 * Create a pile of boxes.
 *
 * @param {number} height:  The number of boxes in the pile.
 */
BoxManager.prototype.createPile = function (height) {

    for (var i = 1; i <= height; i++)
        this.create(i);
};


/**
 * Generate new boxes for the map.
 */
BoxManager.prototype.generate = function () {

    // Wait some time between boxes creation.
    if (this.game.time.time < this.nextBoxTime)
        return;

    // Decide whether to create a pile or a single box and its height.
    var random = Math.random(),
        createPile = random > 0.6,
        height = Math.ceil(random * 3),
        emptyBlocks = Math.round(Math.random() * 5);

    if (createPile)
        this.createPile(height);
    else
        this.create(height);

    // Update the next box time.
    this.nextBoxTime = this.game.time.time + 400 * emptyBlocks;
};
