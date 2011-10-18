function main(){    
    var myBall = new ball(context2d,ballX,ballY, startAngle)
    ballX = myBall.getNextX(ballX);
    ballY = myBall.getNextY(ballY);
    startAngle = myBall.angle    
    clear();
    myBall.draw()
}

function clear(){
    context2d.clearRect(0,0,800,800)
}
