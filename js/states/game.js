var SophiRunner = SophiRunner || {};
var UpArrow, K, Spacebar, RightArrow, L, H, LeftArrow;

SophiRunner.Game = function (){};

//setting game configuration and loading the assets for the loading screen
SophiRunner.Game.prototype = {
	preload: function () {
		this.game.tileSize = 70;
	},

	create: function () {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.stage = new Stage(this.game);
		this.player = new Player(this.game);

        this.setControls();
	},

	update: function () {
		this.game.physics.arcade.collide(this.stage.floors, this.player.sprite);

        var jumping = UpArrow.isDown || K.isDown || Spacebar.isDown,
            sprinting = RightArrow.isDown || L.isDown,
            braking = LeftArrow.isDown || H.isDown;

		if (jumping)
			this.player.jump();

        if (sprinting)
            this.player.sprint();

        if (braking)
            this.player.brake();

        if (!sprinting && !braking)
            this.player.walk();

        // If the player is standing on the ground, play the walking
        // animation.
        if (this.player.sprite.body.touching.down)
            this.player.sprite.animations.play('walk');

	},

    setControls: function () {
		// Jump.
        UpArrow = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
        K = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
        Spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        // Sprint.
        RightArrow = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        L = this.game.input.keyboard.addKey(Phaser.Keyboard.L);

        // Brake.
        LeftArrow = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        H = this.game.input.keyboard.addKey(Phaser.Keyboard.H);
    }
};
