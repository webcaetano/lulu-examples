var params = require('urlParams');

module.exports = function(){
	var {scope,game} = require('main');
	var lulu = require('lulu')(game);

	// basic
	var circle = lulu.circle();
	circle.x = 100;
	circle.y = 300;
}
