var Phaser = require('phaser');
var main = require('./main');

var setup = {
	width:600,
	height:600,
	where:'master-canvas'
}

if(__DEV__){
	require('./modules/stats')();
}


var game = main.game = new Phaser.Game(setup.width, setup.height, Phaser.CANVAS, setup.where, setup.where);

game.state.add('game', require('./game'));

game.state.start('game');
