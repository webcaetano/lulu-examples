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
		require('./layers')();
		require('./menu')();

		switch(params.example){
			default :
			case 'sprite':
				require('./examples/sprite')();
			break;
			case 'rectangle':
				require('./examples/rectangle')();
			break;
			case 'circle':
				require('./examples/circle')();
			break;
			// case 'test':
			// 	require('./test')();
			// break;
		}
	}

	return state;
}
