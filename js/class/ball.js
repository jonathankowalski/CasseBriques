/* 
 * @author Jonathan
 * Prend en argument le contexte et dessine une balle
 */
function Ball(context, x, y, angle){
    this.context = context;
    this.x = x;
    this.y = y;
    this.vitesse = 4;
    this.angle = angle;    
}

Ball.prototype.draw = function(){
    this.context.beginPath();
    this.context.arc(this.x,this.y,5,0,Math.PI*2,true)
    this.context.fill()
}
    
Ball.prototype.inverseAngleY = function(angle){
    newAngle = 2*Math.PI - angle;
    return newAngle
}

Ball.prototype.inverseAngleX = function(angle){
    newAngle = Math.PI - angle
    return newAngle
}

Ball.prototype.getNextX = function(x){
    newX = x + Math.cos(this.angle)*this.vitesse;
    if(newX < 0 || newX > playWidth){            
        this.angle = this.inverseAngleX(this.angle);
        return this.getNextX(x);
    } else {
        return newX;
    }
}

Ball.prototype.getNextY = function(y){
    newY = y + Math.sin(this.angle)*this.vitesse;
    if(newY < 0 || newY > playHeight){
        this.angle = this.inverseAngleY(this.angle);
        return this.getNextY(y);
    } else {
        return newY;
    }
}


