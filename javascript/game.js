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
			this.bar= new Ball(this);
			}
		else
			{
			element.appendChild(document.createTextNode('Go buy a real browser !'));
			}
		},
	destruct : function() {
		}
});
