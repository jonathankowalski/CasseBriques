var Game=new Class({
	initialize: function(element) {
		// Creating canvas
		this.canvas=document.createElement('canvas');
		var size=element.getSize();
		this.width=size.x;
		this.height=size.y;
		this.canvas.width=this.width;
		this.canvas.height=this.height;
		this.aspectRatio=this.height/200;
		while(element.childNodes[0])
			element.removeChild(element.childNodes[0]);
		if(this.canvas.getContext)
			{
			element.appendChild(this.canvas);
			this.context = this.canvas.getContext('2d');
			this.bar= new Bar(this);
			this.ball= new Ball(this);
			this.populate();
			this.timer=this.main.delay(5, this);
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
			this.ball.speed=0;
			this.populate();
			}
		},
	populate : function() {
		var bHeight=10*this.aspectRatio, bWidth=30*this.aspectRatio, bMargin=2,
		bXDecal=Math.floor((this.width%(bWidth+bMargin))/2),
		bYDecal=Math.floor(((this.height/2)%(bHeight+bMargin))/2),
		gYMargin=5*this.aspectRatio, gXMargin=5*this.aspectRatio;
		this.bricks=new Array();
		for(var i=0, j=Math.floor((this.width-(gXMargin*2))/(bWidth+bMargin)); i<j; i++)
			{
			//this.bricks[i]=array(); Could improve hit test by checking lines hit first
			for(var k=0, l=Math.floor((this.height/2)/(bHeight+bMargin)); k<l; k++)
				{
				this.bricks.push(new Brick(this,gXMargin+bXDecal+i*bWidth+bMargin*(i-1),
					gYMargin+bYDecal+k*bHeight+bMargin*(k-1),bWidth,bHeight));
				}
			}
		},
	destruct : function() {
		}
});
