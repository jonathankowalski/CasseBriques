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

var Game=new Class({
	initialize: function(element) {
		// Creating canvas
		this.canvas=document.createElement('canvas');
		var size=element.getSize();
		this.width=size.x;
		this.height=size.y;
		this.canvas.width=this.width;
		this.canvas.height=this.height;
		this.canvas.setStyle('display','block');
		this.aspectRatio=this.height/200;
		while(element.childNodes[0])
			element.removeChild(element.childNodes[0]);
		if(this.canvas.getContext)
			{
			element.appendChild(this.canvas);
			this.context = this.canvas.getContext('2d');
			this.bar= new Bar(this);
			this.ball= new Ball(this);
			this.level=1;
			this.populate();
			this.timer=this.main.delay(30, this);
			}
		else
			{
			element.appendChild(document.createTextNode('Go buy a real browser !'));
			}
		},
	main : function() {
		if(this.timer)
			{
			this.ball.move();
			this.timer=this.main.delay(5, this);
			}
		if(!this.bricks.length)
			{
			var snd = new Audio("sounds/37215__simon-lacelle__ba-da-dum.ogg");
			snd.play();
			this.level++;
			this.ball.speed=0;
			this.bar.glueBall();
			this.populate();
			}
		},
	populate : function() {
		var bHeight=10*this.aspectRatio, bWidth=30*this.aspectRatio, bMargin=2,
			gXMargin=10*this.aspectRatio, gYMargin=10*this.aspectRatio;
		bXDecal=Math.floor(((this.width-(gXMargin*2))%(bWidth+bMargin))/2),
		bYDecal=Math.floor((((this.height/2)-(gYMargin*2))%(bHeight+bMargin))/2),
		this.bricks=new Array();
		for(var i=0, j=Math.floor((this.width-(gXMargin*2))/(bWidth+bMargin)); i<j; i++)
			{
			//this.bricks[i]=array(); Could improve hit test by checking lines hit first
			for(var k=0, l=Math.floor(((this.height/2)-(gYMargin*2))/(bHeight+bMargin)); k<l; k++)
				{
				this.bricks.push(new Brick(this,gXMargin+bXDecal+i*bWidth+bMargin*(i-1),
					gYMargin+bYDecal+k*bHeight+bMargin*(k-1),bWidth,bHeight));
				}
			}
		},
	destruct : function() {
		}
});
