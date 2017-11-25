var _ = require('lodash');
var params = require('urlParams');

module.exports = function(){
	var {scope,game} = require('main');

	var self = scope.layers = _.transform([
		'mid',
		'ui',
	],function(layers,layerName){
		layers[layerName] = game.add.group();
	},{});
}
