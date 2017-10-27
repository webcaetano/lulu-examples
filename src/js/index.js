var Phaser = require('phaser');
var main = require('./main');

var setup = {
	width:300,
	height:300,
	where:'master-canvas'
}

// @if !dist
require('./modules/stats')();
// @endif


var game = main.game = new Phaser.Game(setup.width, setup.height, Phaser.CANVAS, setup.where, setup.where);

game.state.add('game', require('./game'));

game.state.start('game');
