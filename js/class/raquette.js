/**
 * @author Jonathan
 * prend en argument le contexte et dessine une raquette
 */
function Raquette(context){
    this.context = context;
    this.width = 60; this.height = 10;
    this.y = 280;
    this.x = 100;
}

Raquette.prototype.draw = function(){
    this.context.fillRect(this.x, this.y, this.width, this.height)
}

Raquette.prototype.changeX = function(x){
    maxX = playWidth - this.width - 10;
    if(x < maxX){
        this.x = x;
    } else {
        this.x = maxX
    }
}


