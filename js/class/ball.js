/* 
 * @author Jonathan
 * Prend en argument le contexte et dessine une balle
 */
function Ball(game){
    this.game = game;
    this.r = 5;
    this.x =(this.game.width/2)-(this.r/2);
    this.y = this.game.height-this.game.raq.height-(this.r*2)-10;
    this.vitesse = 4;
    this.angle = 7*Math.PI/4;
	this.draw();
}

Ball.prototype.draw = function(){
    this.game.context.beginPath();
    this.game.context.arc(this.x,this.y,this.r-1,0,Math.PI*2,true)
    this.game.context.fill()
}
    
Ball.prototype.remove = function(angle){
	this.game.context.clearRect(this.x-this.r, this.y-this.r, this.r*2, this.r*2);
}
    
Ball.prototype.move = function(angle){
	this.remove();
	var newX = this.getNextX();
	var newY = this.getNextY(); 
	if(newY >this.game.height)
		this.game.loose();
	else
		{
		if(newX < 0 || newX > this.game.width)     
			{
			this.inverseAngleX();
			this.newX=this.getNextX()
			}
		else
			this.x=newX;
		if(newY < 0 ||(newX>this.game.raq.x&&newX<this.game.raq.x+this.game.raq.width&&newY >this.game.raq.y-this.game.raq.height))
			{
			this.inverseAngleY();
			this.newY=this.getNextY();
			}
		else
			this.y=newY;
		}
}
    
Ball.prototype.inverseAngleY = function(){
    this.angle=2*Math.PI - this.angle;
}

Ball.prototype.inverseAngleX = function(){
    this.angle=Math.PI - this.angle;
}

Ball.prototype.getNextX = function(){
    return this.x + Math.cos(this.angle)*this.vitesse;
}

Ball.prototype.getNextY = function(y){
    return this.y + Math.sin(this.angle)*this.vitesse;
}


