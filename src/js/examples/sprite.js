var params = require('urlParams');

module.exports = function(){
	var {scope,game} = require('main');
	var lulu = require('lulu')(game);


	var group = game.add.group();
	group.x = 300;
	group.y = 300;

	var sprite = game.add.sprite(0,0,'main','wizz/wizz0032.png');

	sprite.angle = 0;
	sprite.x = 300;
	sprite.y = 300;
	group.add(sprite);
	lulu.ajustSprite(sprite);
}
