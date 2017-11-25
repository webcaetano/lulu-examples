var params = require('urlParams');
var _ = require('lodash');
var Phaser = require('phaser');
var main = require('main');
var utils = require('utils');
var {game} = main;
var scope = null;

var assets = {
	images:{
		phaserDude:'images/phaser-dude.png'
	},
	sprites:{},
	audio:{},
	atlas:{
		main:{
			image:'texture/atlas.png',
			jsonUrl:'texture/atlas.json'
		}
	}
}

module.exports = function(){
	var state = {};

	state.init = function(){
		scope = main.scope = {};
	}

	state.preload = function(){
		game.stage.disableVisibilityChange = false;
		game.stage.backgroundColor = '#262626';
		utils.loadAssets(game,assets);
		game.load.start();
	}

	state.create = function(){
		switch(params.example){
			case 'sprite':
				require('./examples/sprite.js')();
			break;
			// case '2':
			// 	require('./example2')(game,scope,rootScope);
			// break;
			// case '3':
			// 	require('./example3')(game,scope,rootScope);
			// break;
			// case '4':
			// 	require('./example4')(game,scope,rootScope);
			// break;
			// case '5':
			// 	require('./example5')(game,scope,rootScope);
			// break;
			default :
			case 'test':
				require('./test')();
			break;
		}
	}

	return state;
}
