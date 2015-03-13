var Sophicoso = function (game) {
	this.sprite = game.add.sprite(game.width/2, game.height/2 - 100, 'logo');
	this.sprite.anchor.setTo(0.5, 0.5);
};

Sophicoso.prototype.spin = function () {
	this.sprite.angle += 25;
};