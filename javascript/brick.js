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
	move : function(e) {
		var x=e.page.x-this.game.canvas.getPosition().x-(this.width/2);
		if(x!=this.x)
			{
			maxX = this.game.width - this.width;
			if(x<=0)
				this.x=0;
			else if(x < maxX)
				this.x = x;
			else
				this.x = maxX;
			this.game.context.clearRect(0, this.y, this.game.width, this.game.height)
			this.draw();
			if(!this.game.ball.speed)
				{
				this.game.ball.remove();
				this.game.ball.x=this.x+this.width/2;
				this.game.ball.y=this.y-this.height-(this.game.ball.r/2);
				this.game.ball.draw();
				}
			}
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
