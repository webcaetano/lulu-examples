var _ = require('lodash');
var params = require('urlParams');

module.exports = function(){
	var {scope,game} = require('main');

	var group = game.add.group();
	scope.layers.ui.add(group);

	var init = {
		x:20,
		y:20,
	};

	var gap = 45;

	_.each([
		{
			name:'sprite',
		},
		{
			name:'rectangle',
		},
	],function(val,i){
		var button = game.add.group();

		button.x = init.x;
		button.y = init.y + (gap*i);

		var bkg = game.add.graphics();
		bkg.beginFill('0xDFDFDFA');
		bkg.drawRoundedRect(0,0,110,30,5);

		var label = game.add.text(0,4,val.name,{
			fontSize:12,
			align:'center',
			bold:false,
			font:'Arial',
		});

		label.x = (bkg.width/2)-(label.width/2);
		label.y = (bkg.height/2)-(label.height/2)+2;

		bkg.inputEnabled = true;
		bkg.events.onInputDown.add(function(){
			window.location.href = "/?example="+val.name;
		})

		button.add(bkg);
		button.add(label);
		group.add(button);
	})
}
