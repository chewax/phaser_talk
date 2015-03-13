/**
 * Encapsulation for all the player related logic.
 *
 * @param {object} game: A Phaser game object.
 */
var Player = function(game){
	this.game = game;

	// Create the sprite and add animation.
	this.sprite = this.game.add.sprite(50, 50, 'alien_walk');
	this.sprite.animations.add('walk', [0,1], 10, true, true);

	// Enable collisions for this player.
	this.game.physics.arcade.enable(this.sprite);
	this.sprite.enableBody = true;
	this.sprite.body.collideWorldBounds = true;

	// Add movement properties.
	this.sprite.body.bounce.y = 0.3;
	this.sprite.body.gravity.y = 1500;
}


/**
 * Make the player jump if it is standing on the ground.
 */
Player.prototype.jump = function () {
	if (this.sprite.body.touching.down)
		this.sprite.body.velocity.y = -800;

	this.sprite.animations.stop();
};


/**
 * Play walking animation.
 */
Player.prototype.walk = function () {
    this.sprite.body.velocity.x = 0; };


/**
 * Move to the right.
 */
Player.prototype.sprint = function () {
    this.sprite.body.velocity.x = 150;
};


/**
 * Move to the left.
 */
Player.prototype.brake = function () {
    this.sprite.body.velocity.x = -150;
};


/**
 * Cause the player to colide with the given objects.
 *
 * @param {object[]} objects: Objects which the player will colide with.
 */
Player.prototype.colideWith = function (objects) {
    this.game.physics.arcade.collide(objects, this.sprite);
};
