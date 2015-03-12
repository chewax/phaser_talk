/**
 * Encapsulation for all the player related logic.
 *
 * @param {object} game: A Phaser game object.
 */
var Player = function(game){
	this.game = game;

    // Create the sprite.
	this.sprite = game.add.sprite(
        32,  // Coordinate in the X axis.
        game.world.height - game.tileSize * 3,  // Coordinate in the Y axis.
        'alien'  // Sprite type.
    );

    // Enable collisions for this player.
	this.game.physics.arcade.enable(this.sprite);
    this.sprite.enableBody = true;
    this.sprite.body.collideWorldBounds = true;

    // Add movement properties.
    this.sprite.body.bounce.y = 0.2;
    this.sprite.body.gravity.y = 300;

}


/**
 * Make the player jump if it is standing on the ground.
 */
Player.prototype.jump = function () {

	if (this.sprite.body.touching.down) {
		this.sprite.body.velocity.y = -200;
	}
}
