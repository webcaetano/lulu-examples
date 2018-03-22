var params = require('urlParams');

module.exports = function(){
	var {scope,game} = require('main');
	var lulu = require('lulu')(game);


	var group = game.add.group();
	group.x = 150;
	group.y = 150;

	var sprite = game.add.sprite(0,0,'main','wizz/wizz0032.png');
	sprite.angle = 0;
	sprite.x = 0;
	sprite.y = 0;

	group.add(sprite);
	lulu.ajust(group);
}
