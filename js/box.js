var Box = function (x, y, stage) {
    this.sprite = stage.game.add.sprite(x, y, 'box');

    // Enable collisions for the box.
    stage.game.physics.arcade.enable(this.sprite);
    this.sprite.enableBody = true;
    this.sprite.body.immovable = true;

    // Set movement information.
    this.sprite.body.velocity.x = stage.levelSpeed;
};
