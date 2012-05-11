var Ball=new Class({
	initialize: function(game) {
		this.game = game;
		this.r = 2.5*this.game.aspectRatio;
		this.x =(this.game.width/2)-(this.r/2);
		this.y = this.game.height-this.game.bar.height-(this.r*2)-10;
		this.speed = 0;
		this.angle = 13*Math.PI/8;
		this.draw();
		this.game.canvas.addEvent('click',this.start.bind(this));
		},
	draw : function() {
		this.game.context.beginPath();
		this.game.context.arc(this.x,this.y,this.r-1,0,Math.PI*2,true);
		this.game.context.fill();
		},
	remove : function() {
		this.game.context.clearRect(this.x-this.r, this.y-this.r, this.r*2, this.r*2);
		},
	start : function() {
		this.speed=1*this.game.aspectRatio;
		},
	move : function() {
		var nextX=this.x + Math.cos(this.angle)*this.speed;
		var nextY=this.y + Math.sin(this.angle)*this.speed;
		this.remove();
		if(nextY >this.game.height)
			{
			this.speed=0;
			this.inverseAngleY();
			}
		else
			{
			var hit=0, newHit=0;
			for(var i=this.game.bricks.length-1; i>=0; i--)
				{
				newHit=this.game.bricks[i].hit(nextX,nextY,this.r);
				if(newHit&&!this.game.bricks[i].remove())
					{
					i--;
					hit=hit|newHit;
					}
				}
			if(hit&1||hit&2)
				{
				this.inverseAngleX();
				}
			if(hit&4||hit&8)
				{
				this.inverseAngleY();
				}
			if(!hit)
				{
				if(nextX < 0 || nextX > this.game.width)     
					{
					this.inverseAngleX();
					}
				else
					{
					this.x=nextX;
					}
				if(nextY < 0)
					{
					this.inverseAngleY();
					}
				else if(nextX+this.r/2>this.game.bar.x
					&&nextX-this.r/2<this.game.bar.x+this.game.bar.width
					&&nextY+this.r/2>this.game.bar.y
					&&nextY<this.game.bar.y+(this.game.bar.height/2))
					{
					this.inverseAngleY((((nextX-this.game.bar.x-(this.game.bar.width/2))/(this.game.bar.width/2))/2)*-(Math.PI/5));
					if(this.angle<9*Math.PI/8&&this.angle>4*Math.PI/8)
						{
						this.angle=9*Math.PI/8;
						}
					else if(this.angle>15*Math.PI/8)
						{
						this.angle=15*Math.PI/4;
						}
					}
				else
					{
					this.y=nextY;
					}
				}
			}
		this.draw();
		},
	inverseAngleX : function() {
		this.angle=(Math.PI - this.angle)%(2*Math.PI);
		},
	inverseAngleY : function(deviation) {
   		this.angle=(2*Math.PI - this.angle -(deviation?deviation:0))%(2*Math.PI);
		},
	destruct : function() {
		}
});
