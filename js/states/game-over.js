var SophiRunner = SophiRunner || {};

SophiRunner.GameOver = function(){};

SophiRunner.GameOver.prototype = {

	create: function() {
        var t;

		// Menu title.
		text = "Game Over. Tap to retry",
        style = {
            font: "30px Arial",
            fill: "#000",
            align: "center"
        },
        t = this.game.add.text(
            this.game.world.centerX,
            this.game.world.centerY,
            text,
            style
        );
		t.anchor.set(0.5);

        this.music = this.game.add.audio('game-over');
        this.music.play();
	},

	update: function() {

        // If the user press a button, restart the game again.
		if(this.game.input.activePointer.justPressed())
			this.game.state.start('Game');
	}
};
