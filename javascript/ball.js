var Ball=new Class({
	initialize: function(game) {
		this.game = game;
		this.r = 2.5*this.game.aspectRatio;
		this.x =(this.game.width/2)-(this.r/2);
		this.y = this.game.height-this.game.bar.height-(this.r*2)-10;
		this.speed = 0;
		this.angle = 13*Math.PI/8;
		this.draw();
		this.start();
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
		this.speed=2*this.game.aspectRatio;
		},
	move : function() {
		var nextX=this.x + Math.cos(this.angle)*this.speed;
		var nextY=this.y + Math.sin(this.angle)*this.speed;
		this.remove();
		if(nextY >this.game.height)
			{
			this.speed=0;
			}
		else
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
			else
				{
				this.y=nextY;
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
