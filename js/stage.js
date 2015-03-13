var Stage = function (game) {
	this.grid = [];
	this.game = game;
	this.levelSpeed = -250;

	this.loadBackground();
	this.loadFloor();
    this.loadBoxes();
};


Stage.prototype.loadBackground = function () {
	this.background = this.game.add.tileSprite(
        0, 0, this.game.width, this.game.height, 'background');
	this.background.autoScroll(-40, 0);
};


Stage.prototype.loadFloor = function () {
	this.floors = this.game.add.tileSprite(
        0,
        this.game.height - this.game.tileSize,
        this.game.width, this.game.tileSize,
        'floor'
    );
	this.floors.autoScroll(this.levelSpeed, 0);

	this.game.physics.arcade.enable(this.floors);
	this.floors.body.immovable = true;
};


Stage.prototype.loadBoxes = function () {
    this.boxes = this.game.add.group();

    this.game.physics.arcade.enable(this.boxes);
    this.boxes.enableBody = true;
};


Stage.prototype.createBoxPile = function (height) {
    for (var i = 1; i <= height; i++) {
        this.createBox(i);
    }
};


Stage.prototype.createBox = function (stackPosition) {
	var stackOffset = this.game.tileSize * (stackPosition + 1);

    var tile = this.boxes.create(
		this.game.width + this.game.tileSize,
		this.game.world.height - stackOffset,
		'box'
	);

	tile.body.immovable = true;
	tile.body.velocity.x = this.levelSpeed;

	return tile;
};


/**
 * PURE MAGIC!!
 */
Stage.prototype.update = function () {

};
