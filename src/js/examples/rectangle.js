var params = require('urlParams');

module.exports = function(){
	var {scope,game} = require('main');
	var lulu = require('lulu')(game);

	// basic
	var square = lulu.square({
		width:50,
		height:50,
	});
	square.x = 100;
	square.y = 300;

	// example of 9 patch
	var patchSquare = lulu.square();
	patchSquare.x = 300;
	patchSquare.y = 200;

	var group = game.add.group();
	var topGroup = game.add.group();
	var ninePatchGroup = null;

	topGroup.add(patchSquare);

	var createNinePatch = function(){
		if(ninePatchGroup) ninePatchGroup.pendingDestroy = true;
		ninePatchGroup = game.add.group();

		var size = {
			width:patchSquare.data.width,
			height:patchSquare.data.height,
		};

		var padding = {
			width:20,
			height:20,
		}

		_.each([
			{
				sprite:'9patch/001.png',
				x:-padding.width,
				y:-padding.height,
				width:37,
				height:35,
				ajust:false,
			},
			{
				sprite:'9patch/002.png',
				x:37-padding.width,
				y:4-padding.height,
				width:size.width-(37*2)+(padding.width*2),
				height:32,
				ajust:false,
			},
			{
				sprite:'9patch/003.png',
				x:37+(size.width-(37*2))+padding.width,
				y:0-padding.height,
				width:37,
				height:35,
				ajust:false,
			},
			{
				sprite:'9patch/004.png',
				x:6-padding.width,
				y:35-padding.height,
				width:30,
				height:size.height-(35*2)+(padding.height*2),
				ajust:false,
			},
			{
				sprite:'9patch/005.png',
				x:36-padding.width,
				y:35-padding.height,
				width:size.width-(30*2)+(padding.width*2),
				height:size.height-(35*2)+(padding.height*2),
				ajust:false,
			},
			{
				sprite:'9patch/006.png',
				x:23+(size.width-(30*2))+padding.width,
				y:35-padding.height,
				width:31,
				height:size.height-(35*2)+(padding.height*2),
				ajust:false,
			},
			{
				sprite:'9patch/007.png',
				x:3-padding.width,
				y:35+size.height-(35*2)+padding.height,
				width:33,
				height:37,
				ajust:false,
			},
			{
				sprite:'9patch/008.png',
				x:3+33-padding.width,
				y:35+size.height-(35*2)+padding.height,
				width:size.width-(33*2)+(padding.width*2),
				height:35,
				ajust:false,
			},
			{
				sprite:'9patch/009.png',
				x:30+(size.width-(33*2))+padding.width,
				y:35+size.height-(35*2)+padding.height,
				width:33,
				height:37,
				ajust:false,
			},
		],function(val,i){
			var sprite = game.add.sprite(0,0,'main',val.sprite);
			sprite.x = val.x+patchSquare.x;
			sprite.y = val.y+patchSquare.y;

			var spriteSize = {
				width:sprite.width,
				height:sprite.height,
			}

			sprite.width = val.width;
			sprite.height = val.height;

			if(val.ajust) lulu.ajust(sprite)

			ninePatchGroup.add(sprite);
		});

		group.add(ninePatchGroup);
	}

	createNinePatch();

	patchSquare.onChange.add(function(){
		createNinePatch();
	})
}
