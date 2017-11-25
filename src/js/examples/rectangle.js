var params = require('urlParams');

module.exports = function(){
	var {scope,game} = require('main');
	var lulu = require('lulu')(game);

	// var group = game.add.group();
	// group.x = 100;
	// group.y = 100;

	var square = lulu.square();
	square.x = 300;
	square.y = 300;
	// group.add(square)
}
