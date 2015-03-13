var Sophicoso = function (x, y, speed, game) {
	this.sprite = game.add.sprite(x, y, 'logo');
	this.sprite.anchor.setTo(0.5, 0.5);
    this.speed = speed;
};

Sophicoso.prototype.spin = function () {
	this.sprite.angle += this.speed;
};
