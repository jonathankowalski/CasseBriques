var Bar=new Class({
	initialize: function(game) {
		this.game = game;
		this.width = 30*this.game.aspectRatio;
		this.height = 5*this.game.aspectRatio;
		this.yMargin = 5*this.game.aspectRatio;
		this.y = this.game.height-this.height-this.yMargin;
		this.x = (this.game.width/2)-(this.width/2);
		this.draw();
		},
	draw : function() {
		this.game.context.fillRect(this.x, this.y, this.width, this.height);
		},
	remove : function() {
		this.game.context.clearRect(0, this.y, this.game.width, this.game.height);
		},
	destruct : function() {
		}
});
