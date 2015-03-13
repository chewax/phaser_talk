var Stage = function (game) {
	this.grid = [];
	this.game = game;
	this.levelSpeed = -250;
    this.nextBoxTime = game.time.time;

	this.loadBackground();
	this.loadFloor();
    // this.loadBoxes();
    //
    this.boxes = new BoxManager(this);
};


/**
 * Load the background tiles.
 */
Stage.prototype.loadBackground = function () {
	this.background = this.game.add.tileSprite(
        0, 0, this.game.width, this.game.height, 'background');
	this.background.autoScroll(-40, 0);
};


/**
 * Initialize the floor tiles group.
 */
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


/**
 * PURE MAGIC!!
 */
Stage.prototype.update = function () {
    this.boxes.generate();
};
