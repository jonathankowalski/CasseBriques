/*
 * Copyright (C) 2012 Jonathan Kowalski
 * Copyright (C) 2012 Nicolas Froidure
 *
 * This file is free software;
 * you can redistribute it and/or modify it under the terms of the GNU
 * General Public License (GPL) as published by the Free Software
 * Foundation, in version 2. It is distributed in the
 * hope that it will be useful, but WITHOUT ANY WARRANTY of any kind.
 *
 */

var Brick=new Class({
	initialize: function(game,x,y,w,h){
		this.game = game;
		this.width = w; this.height = h;
		this.y = y;
		this.x = x;
		this.draw();
		},
	draw : function() {
		this.game.context.fillRect(this.x, this.y, this.width, this.height);
		},
	remove : function() {
		this.game.context.clearRect(this.x-1, this.y-1, this.width+2, this.height+2);
		this.game.bricks.splice(this.game.bricks.indexOf(this),1);
		},
	hit : function(x,y,r) {
		var hit=0;
		if(x+(r/2)>this.x&&x-(r/2)<this.x+this.width&&y+(r/2)>this.y&&y-(r/2)<this.y+this.height)
			{
			if(x>this.x+this.width-r&&x+r<this.x+this.width)
				hit+=1 // hit on right
			else if(x>this.x&&x<this.x+r)
				hit+=2 // hit on left
			if(y>this.y&&y+r<this.y+this.height)
				hit+=4; // hit on bottom
			else
				hit+=8 // hit on top
			}
		return hit;
		},
	destruct : function() {
		}
});
