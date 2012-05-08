/* 
 * @author Jonathan
 * Prend en argument le contexte et dessine une balle
 */
function Game(parent){
	// Creating canvas
	this.canvas=document.createElement('canvas');
	this.width=$(parent).width();
	this.height=$(parent).height();
	this.canvas.width=this.width;
	this.canvas.height=this.height;
	this.canvas.style.height='100%';
	this.canvas.style.width='100%';
	this.canvas.style.border='1px solid #000';
	while(parent.childNodes[0])
		parent.removeChild(parent.childNodes[0]);
	if(this.canvas.getContext)
		{
		parent.appendChild(this.canvas);
		this.context = this.canvas.getContext('2d');
		this.raq = new Raquette(this);
		this.ball = new Ball(this);
		this.timer=setTimeout(this.draw.bind(this), 20);
		}
	else
		{
		parent.appendChild(document.createTextNode('Va acheter un vrai navigateur'));
		}
}

Game.prototype.loose = function() {
	clearInterval(this.timer);
}

Game.prototype.draw = function() {
	this.ball.move();
	this.ball.draw();
	this.timer=setTimeout(this.draw.bind(this), 20);
}