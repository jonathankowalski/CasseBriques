/**
 * @author Jonathan
 * prend en argument le contexte et dessine une raquette
 */
function Brick(game,x,y,w,h){
    this.game = game;
    this.width = w; this.height = h;
    this.y = y;
    this.x = x;
	this.draw();
}

Brick.prototype.remove = function(){
	this.game.context.clearRect(this.x, this.y, this.width, this.height);
	this.game.bricks.splice(this.game.bricks.indexOf(this),1);
}

Brick.prototype.draw = function(){
	this.game.context.fillRect(this.x, this.y, this.width, this.height)
}

Brick.prototype.hit = function(x,y,r){
	var hit=0;
	if(x+(r/2)>this.x&&x-(r/2)<this.x+this.width&&y+(r/2)>this.y&&y-(r/2)<this.y+this.height)
		 {
		// if(this.x+(this.width/2)-x-(r/2)>0)
			// hit+=1 // hit on right
		// else
			// hit+=2 // hit on left
		// if(this.y+(this.height/2)-y-(r/2)>0)
			// hit+=4; // hit on bottom
		// else
			// hit+=8 // hit on top
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
}

