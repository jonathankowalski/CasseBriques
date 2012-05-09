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
		this.populate();
		this.timer=setTimeout(this.draw.bind(this), 5);
		}
	else
		{
		parent.appendChild(document.createTextNode('Va acheter un vrai navigateur'));
		}
}

Game.prototype.populate = function() {
	var bHeight=20, bWidth=60, bMargin=1,
		bXDecal=Math.floor((this.width%(bWidth+bMargin))/2),
		bYDecal=Math.floor(((this.height/2)%(bHeight+bMargin))/2),
		gYMargin=30, gXMargin=30;
	this.bricks=new Array();
	for(var i=0, j=Math.floor((this.width-(gXMargin*2))/(bWidth+bMargin)); i<j; i++)
		{
		//this.bricks[i]=array(); Could improve hit test by checking lines hit first
		for(var k=0, l=Math.floor((this.height/2)/(bHeight+bMargin)); k<l; k++)
			{
			this.bricks.push(new Brick(this,gXMargin+bXDecal+i*bWidth+bMargin*(i-1),gYMargin+bYDecal+k*bHeight+bMargin*(k-1),bWidth,bHeight));
			}
		}
}

Game.prototype.loose = function() {
	clearInterval(this.timer);
	this.timer=0;
}

Game.prototype.draw = function() {
	this.ball.move();
	this.ball.draw();
	if(this.timer)
		this.timer=setTimeout(this.draw.bind(this), 20);
	if(!this.bricks.length)
		{
		this.ball.vitesse=0;
		this.ball.remove();
		this.ball.y=this.width;
		this.populate();
		}
}