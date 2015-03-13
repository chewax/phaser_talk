/**
 * Encapsulation for all the player related logic.
 *
 * @param {object} game: A Phaser game object.
 */
var Player = function(game){
	this.game = game;

	// Create the sprite and add animation.
	this.sprite = this.game.add.sprite(50, 200, 'alien_walk');
	this.sprite.animations.add('walk', [0,1], 10, true, true);

	// Enable collisions for this player.
	this.game.physics.arcade.enable(this.sprite);
	this.sprite.enableBody = true;
	this.sprite.body.collideWorldBounds = true;

	//Enable collisions for cover
	this.cover = this.game.add.sprite(50,200,'umbrella');
	this.game.physics.arcade.enable(this.cover);
	this.cover.enableBody = true;
	// this.cover.body.collideWorldBounds = true;

	// Add movement properties.
	this.sprite.body.bounce.y = 0.3;
	this.sprite.body.gravity.y = 1500;


	this.jumpfx = this.game.add.audio('jumpfx');
    this.jumpfx.loop = false;
    this.jumpfx.volume = 1;

	this.score = 0;
}


/**
 * Make the player jump if it is standing on the ground.
 */
Player.prototype.jump = function () {
	if (this.sprite.body.touching.down) {
		this.sprite.body.velocity.y = -800;
		this.jumpfx.play();
	}


	this.sprite.animations.stop();
};


/**
 * Play walking animation.
 */
Player.prototype.walk = function () {
    this.sprite.body.velocity.x = 0; 
    this.updateCoverPosition();
};


/**
 * Move to the right.
 */
Player.prototype.sprint = function () {
    this.sprite.body.velocity.x = 150;
    this.updateCoverPosition();
};


/**
 * Move to the left.
 */
Player.prototype.brake = function () {
    this.sprite.body.velocity.x = -150;
    this.updateCoverPosition();
};

Player.prototype.updateCoverPosition = function () {
	this.cover.body.x = this.sprite.body.x;
	this.cover.body.y = this.sprite.body.y - 70;
};

/**
 * Cause the player to colide with the given objects.
 *
 * @param {object[]} objects: Objects which the player will colide with.
 */
Player.prototype.colideWith = function (objects) {
    this.game.physics.arcade.collide(objects, this.sprite);
};

Player.prototype.collects = function(objects) {
	this.game.physics.arcade.overlap(objects, this.sprite, this.collectCoin, null, this);
}

Player.prototype.diesWith = function(objects) {
	this.game.physics.arcade.overlap(objects, this.sprite, this.die, null, this);
}

Player.prototype.shields = function(objects) {
	this.game.physics.arcade.overlap(objects, this.cover, this.shield, null, this);
}


Player.prototype.collectCoin = function(player, coin){
	coin.soundfx.play();
	this.score += 10;
	this.game.scoreText.text = 'Score: ' + this.score;

	if (this.score > this.game.maxScore){
		this.game.maxScore = this.score;
	}

	coin.kill();
}

Player.prototype.die = function(player, coin) {
	this.game.music.stop();
    this.game.state.start('GameOver');
}

Player.prototype.shield = function(umbrella, fireball) {
	console.log(fireball);
	fireball.kill();
}