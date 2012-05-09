/**
 * @author Jonathan
 * prend en argument le contexte et dessine une raquette
 */
function Raquette(game){
    this.game = game;
    this.width = 60; this.height = 10; this.yMargin = 10;
    this.y = this.game.height-this.height-this.yMargin;
    this.x = (this.game.width/2)-(this.width/2);
	this.draw();
	$(game.canvas).mousemove(this.move.bind(this))
}

Raquette.prototype.move = function(e){
	var x=e.pageX;
	if(x!=this.x)
		{
		maxX = this.game.width - this.width - 10;
		if(x < maxX){
			this.x = x;
		} else {
			this.x = maxX
		}
		this.game.context.clearRect(0, this.y, this.game.width, this.game.height)
		this.draw();
		}
	if(!this.game.ball.vitesse)
		{
		this.game.ball.remove();
		this.game.ball.x=this.x+this.width/2;
		this.game.ball.y=this.y-this.height-this.game.ball.r/2;
		this.game.ball.draw();
		}
}

Raquette.prototype.draw = function(){
	this.game.context.fillRect(this.x, this.y, this.width, this.height)
}


