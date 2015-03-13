var SophiRunner = SophiRunner || {};
var UpArrow, K, Spacebar, RightArrow, L, H, LeftArrow, Pointer;

SophiRunner.Game = function (){};

//setting game configuration and loading the assets for the loading screen
SophiRunner.Game.prototype = {
	preload: function () {
		this.game.tileSize = 70;
	},

	create: function () {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // Add some music.
        this.game.music = this.game.add.audio('theme');
        this.game.music.loop = true;
        this.game.music.loop.volume = 0.7;
        this.game.music.play();

		this.stage = new Stage(this.game);
		this.player = new Player(this.game);

        this.setControls();
	},

	update: function () {
        this.player.colideWith(this.stage.floors);
        this.player.colideWith(this.stage.boxes.group);     
        this.player.collects(this.stage.coins.group);
        this.player.diesWith(this.stage.fireballs.group);
        this.player.shields(this.stage.fireballs.group);
        

        // Check which actions the user is performing.
        var jumping = UpArrow.isDown || K.isDown || Spacebar.isDown ||
                      Pointer.justPressed(),
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

        // Generate the new map.
        this.stage.update();

        // If the player is out of bounds, game over.
        if (this.player.sprite.body.x + this.player.sprite.body.width < 0) {
            this.game.music.stop();
            this.game.state.start('GameOver');
        }
	},

    setControls: function () {
		// Jump.
        UpArrow = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
        K = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
        Spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        Pointer = this.game.input.activePointer;

        // Sprint.
        RightArrow = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        L = this.game.input.keyboard.addKey(Phaser.Keyboard.L);

        // Brake.
        LeftArrow = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        H = this.game.input.keyboard.addKey(Phaser.Keyboard.H);
    }
};
