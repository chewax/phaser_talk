var Stage = function (game) {
	this.grid = [];
	this.width = Math.ceil(game.width / game.tileSize);
	this.height = Math.ceil(game.height / game.tileSize);
	this.game = game;
	this.levelSpeed = -250;

	this.loadBackground();
	this.loadFloor();
};

Stage.prototype.loadBackground = function () {
	this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
	this.background.autoScroll(-40, 0);
};

Stage.prototype.loadFloor = function () {
	this.floors = this.game.add.tileSprite(0, this.game.height - this.game.tileSize, this.game.width, this.game.tileSize, 'floor');
	this.floors.autoScroll(this.levelSpeed, 0);

	this.game.physics.arcade.enable(this.floors);
	this.floors.body.immovable = true;
};


Stage.prototype.createTile = function () {
	var x = (this.width + 1) * this.game.tileSize;
	var tile = this.floors.create(
		x, 
		this.game.world.height - this.game.tileSize, 
		'floor'
	);

	tile.body.immovable = true;
	tile.body.velocity.x = this.levelSpeed;

	return tile;
};