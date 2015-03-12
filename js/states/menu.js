var SophiRunner = SophiRunner || {};

SophiRunner.Menu = function(){};

SophiRunner.Menu.prototype = {

	create: function() {
		//show the space tile, repeated
		// this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, ' ');

		//give it speed in x
		// this.background.autoScroll(-20, 0);
		this.sophicoso = new Sophicoso(this.game);

		//start game text
		var text = "Tap to begin";
		var style = { font: "30px Arial", fill: "#000", align: "center" };
		var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
		t.anchor.set(0.5);

		//highest score
		text = "Highest score: " + (this.highestScore || 0);
		style = { font: "15px Arial", fill: "#000", align: "center" };

		var h = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
		h.anchor.set(0.5);
	},
	update: function() {
		this.sophicoso.spin();

		if(this.game.input.activePointer.justPressed()) {
			this.game.state.start('Game');
		}
	}
};
