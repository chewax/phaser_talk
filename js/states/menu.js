var SophiRunner = SophiRunner || {};

SophiRunner.Menu = function(){};

SophiRunner.Menu.prototype = {

	create: function() {
		this.sophicosoLeft = new Sophicoso(
            this.game.world.centerX - 80,
            this.game.world.centerY - 100,
            8,
            this.game
        );
		this.sophicosoRight = new Sophicoso(
            this.game.world.centerX + 80,
            this.game.world.centerY - 100,
            -2,
            this.game
        );
        this.showMenu();
	},

	update: function() {
		this.sophicosoLeft.spin();
		this.sophicosoRight.spin();

		if(this.game.input.activePointer.justPressed())
			this.game.state.start('Game');
	},

    showMenu: function () {
        var t, text, h, style;

		// Menu title.
		text = "Tap to begin",
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

		// Highest score label.
		text = "Highest score: " + (this.game.maxScore || 0);
		style = {
            font: "15px Arial",
            fill: "#000",
            align: "center"
        };
		h = this.game.add.text(
            this.game.world.centerX,
            this.game.world.centerY + 50,
            text,
            style
        );
		h.anchor.set(0.5);
    }
};
