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

var GunShot=new Class({
	initialize: function(game,x,y) {
		this.game = game;
		this.width = 0.5*this.game.aspectRatio;
		this.height = 2*this.game.aspectRatio;
		this.x = x;
		this.y = y;
		var snd = new Audio("sounds/20352__cognito-perceptu__gunshot.ogg");
		snd.play();
		this.draw();
		this.move.delay(20,this);
		},
	draw : function() {
			this.game.context.fillStyle = "#ff0000";
			this.game.context.fillRect(this.x-(this.width/2), this.y, this.width, this.height);
		},
	move : function() {
			this.remove();
			this.y-=this.height/2;
			for(var i=this.game.bricks.length-1; i>=0; i--)
				{
				if(this.game.bricks[i].x<this.x&&this.game.bricks[i].x+this.game.bricks[i].width>this.x
					&&this.game.bricks[i].y<this.y&&this.game.bricks[i].y+this.game.bricks[i].height>this.y)
					{
					this.game.context.clearRect(this.x-(this.width/2)-1, this.y, this.width+2, this.height);
					this.game.bricks[i].remove();
					this.clear();
					return;
					}
				}
			if(this.y<0)
				this.clear();
			else
				{
				this.draw();
				this.move.delay(20,this);
				}
		},
	remove : function() {
			this.game.context.clearRect(this.x-(this.width/2)-1, this.y, this.width+2, this.height-1);
		},
	clear : function() {
		this.game.context.clearRect(this.x-(this.width/2)-1, this.y, this.width+2, this.game.height-this.y);
		},
	destruct : function() {
		}
});
