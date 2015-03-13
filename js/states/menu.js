var SophiRunner = SophiRunner || {};

SophiRunner.Menu = function(){};

SophiRunner.Menu.prototype = {

	create: function() {
        var t, text, h, style;

		this.sophicoso = new Sophicoso(this.game);
        this.showMenu();
	},

	update: function() {
		this.sophicoso.spin();

		if(this.game.input.activePointer.justPressed())
			this.game.state.start('Game');
	},

    showMenu: function () {
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
		text = "Highest score: " + (this.highestScore || 0);
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
