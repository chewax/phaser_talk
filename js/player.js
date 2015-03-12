var Player = function(game){
	this.game = game;
	this.sprite = game.add.sprite(32, game.world.height - game.tileSize * 3, 'alien');
	this.game.physics.arcade.enable(this.sprite);

    //  Player physics properties. Give the little guy a slight bounce.
    this.sprite.enableBody = true;
    this.sprite.body.bounce.y = 0.2;
    this.sprite.body.gravity.y = 300;
    this.sprite.body.collideWorldBounds = true;
}

Player.prototype.jump = function () {

	if (this.sprite.body.touching.down) {
		this.sprite.body.velocity.y = -200;
	}
}