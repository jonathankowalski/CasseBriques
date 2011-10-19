/* 
 * @author Jonathan
 * Prend en argument le contexte et dessine une balle
 */
function ball(context, x, y, angle){
    this.context = context;
    this.x = x;
    this.y = y;
    this.vitesse = 4;
    this.angle = angle;
    this.draw = function(){
        this.context.beginPath();
        this.context.arc(x,y,5,0,Math.PI*2,true)
        this.context.fill()
    }
    
    this.inverseAngleY = function(angle){
        newAngle = 2*Math.PI - angle;
        return newAngle
    }
    
    this.inverseAngleX = function(angle){
        newAngle = Math.PI - angle
        return newAngle
    }
    
    this.getNextX = function(x){
        newX = x + Math.cos(this.angle)*this.vitesse;
        if(newX < 0 || newX > playWidth){            
            this.angle = this.inverseAngleX(this.angle);
            return this.getNextX(x);
        } else {
            return newX;
        }
    }
    
    this.getNextY = function(y){
        newY = y + Math.sin(this.angle)*this.vitesse;
        if(newY < 0 || newY > playHeight){
            this.angle = this.inverseAngleY(this.angle);
            return this.getNextY(y);
        } else {
            return newY;
        }
    }
}


