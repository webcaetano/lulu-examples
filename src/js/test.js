var params = require('urlParams');

module.exports = function(){
	var {scope,game} = require('main');
	var lulu = require('lulu')(game);

	var group = game.add.group();
	group.x = 300;
	group.y = 300;

	var sprite = game.add.sprite(0,0,'main','wizz/wizz0032.png');
	// console.log(sprite)

	// group.add(sprite);
	sprite.angle = 0;
	sprite.x = 300;
	sprite.y = 300;
	lulu.ajust(sprite);
	// lulu.ajustSprite(sprite);

	// var point = game.add.graphics()
	// .beginFill('0xFF0000')
	// .drawCircle(0,0,5)
	// group.add(point)

	// var square = lulu.square();
	// square.x = 100;
	// square.y = 100;
	// group.add(square)
}
