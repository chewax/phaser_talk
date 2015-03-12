var Stage = function (game) {
	this.grid = [];
	this.width = Math.ceil(game.width / game.tileSize);
	this.height = Math.ceil(game.height / game.tileSize);
	this.game = game;
	this.levelSpeed = -150;

	this.loadBackground();
	this.loadFloor();
};

Stage.prototype.loadBackground = function () {
	this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
	this.background.autoScroll(-40, 0);
};

Stage.prototype.loadFloor = function () {
	this.floors = this.game.add.group();
	this.floors.enableBody = true;

	for (var x = 0; x < this.width + 2; x++) {
		this.lastFloorItem = this.floors.create(x * this.game.tileSize, this.game.world.height - this.game.tileSize, 'floor');
		this.lastFloorItem.body.immovable = true;
		this.lastFloorItem.body.velocity.x = this.levelSpeed; 
	}

	this.firstFloorItem = this.floors.getAt(0);
};

Stage.prototype.recycleFloor = function () {

	if (this.firstFloorItem.body.x <= -this.game.tileSize){
		//Create new tile at end
		this.lastFloorItem = this.createTile(); 

		//Remove First
		this.floors.remove(this.firstFloorItem, true, true);

		//Get new First
		this.firstFloorItem = this.floors.getAt(0);	
	}
}

Stage.prototype.createTile = function () {
	// var x = this.floors.getAt(12).body.x;
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