/* 
 * @author Jonathan
 * Prend en argument le contexte et dessine une balle
 */
function Ball(game){
    this.game = game;
    this.r = 5*this.game.aspectRatio;
    this.x =(this.game.width/2)-(this.r/2);
    this.y = this.game.height-this.game.raq.height-(this.r*2)-10;
    this.vitesse = 0;
    this.angle = 13*Math.PI/8;
	$(game.canvas).click(this.start.bind(this))
	this.draw();
}

Ball.prototype.start = function(){
	this.vitesse=4*this.game.aspectRatio;
}

Ball.prototype.draw = function(){
    this.game.context.beginPath();
    this.game.context.arc(this.x,this.y,this.r-1,0,Math.PI*2,true);
    this.game.context.fill();
}
    
Ball.prototype.remove = function(angle){
	this.game.context.clearRect(this.x-this.r, this.y-this.r, this.r*2, this.r*2);
}
    
Ball.prototype.move = function(angle){
	this.remove();
	var newX = this.getNextX();
	var newY = this.getNextY(); 
	if(newY >this.game.height)
		{
		this.vitesse=0;
		//this.game.loose();
		}
	else
		{
		var hit=0, newHit=0;
		for(var i=this.game.bricks.length-1; i>=0; i--)
			{
			newHit=this.game.bricks[i].hit(newX,newY,this.r);
			if(newHit&&!this.game.bricks[i].remove())
				{
				i--;
			//console.log('hit'+i+': '+newHit+':l'+this.game.bricks.length);
				hit=hit|newHit;
				}
			}
		if(hit&1||hit&2)
			{
			//console.log('hitx');
			this.inverseAngleX();
			}
		if(hit&4||hit&8)
			{
			//console.log('hity');
			this.inverseAngleY();
			}
		if(!hit)
			{
			if(newX < 0 || newX > this.game.width)     
				{
				this.inverseAngleX();
				newX=this.getNextX()
				}
			else
				{
				this.x=newX;
				}
			if(newY < 0)
				{
				this.inverseAngleY();
				newY=this.getNextY();
				}
			else if(newX+this.r/2>this.game.raq.x&&newX-this.r/2<this.game.raq.x+this.game.raq.width&&newY+this.r/2>this.game.raq.y&&newY<this.game.raq.y+(this.game.raq.height/2))
				{
				this.inverseAngleY((((newX-this.game.raq.x-(this.game.raq.width/2))/(this.game.raq.width/2))/2)*-(Math.PI/5));
				if(this.angle<9*Math.PI/8&&this.angle>4*Math.PI/8)
					{console.log('cond1');
					this.angle=9*Math.PI/8;
					}
				else if(this.angle>15*Math.PI/8)
					{console.log('cond2');
					this.angle=15*Math.PI/4;
					}
				console.log('angle:'+this.angle);
				newY=this.getNextY();
				}
			else
				{
				this.y=newY;
				}
			}
		}
}
    
Ball.prototype.inverseAngleY = function(deviation){
    this.angle=(2*Math.PI - this.angle -(deviation?deviation:0))%(2*Math.PI);
}

Ball.prototype.inverseAngleX = function(){
    this.angle=(Math.PI - this.angle)%(2*Math.PI);
}

Ball.prototype.getNextX = function(){
    return this.x + Math.cos(this.angle)*this.vitesse;
}

Ball.prototype.getNextY = function(y){
    return this.y + Math.sin(this.angle)*this.vitesse;
}


