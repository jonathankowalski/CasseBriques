var Ball=new Class({
	initialize: function(game) {
		this.game = game;
		this.r = 2.5*this.game.aspectRatio;
		this.x =(this.game.width/2)-(this.r/2);
		this.y = this.game.height-this.game.bar.height-(this.r*2)-10;
		this.draw();
		},
	draw : function() {
		this.game.context.beginPath();
		this.game.context.arc(this.x,this.y,this.r-1,0,Math.PI*2,true);
		this.game.context.fill();
		},
	remove : function() {
		this.game.context.clearRect(this.x-this.r, this.y-this.r, this.r*2, this.r*2);
		},
	destruct : function() {
		}
});
