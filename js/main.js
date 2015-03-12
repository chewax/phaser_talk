var SophiRunner = SophiRunner || {};

SophiRunner.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'SophiRunner', '');
// SophiRunner.game = new Phaser.Game(800, 600, Phaser.AUTO, 'SophiRunner', '');
SophiRunner.game.state.add('Boot', SophiRunner.Boot);
SophiRunner.game.state.add('Preload', SophiRunner.Preload);
SophiRunner.game.state.add('Menu', SophiRunner.Menu);
SophiRunner.game.state.add('Game', SophiRunner.Game);

SophiRunner.game.state.start('Boot');