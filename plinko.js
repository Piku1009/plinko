class Plinko{
    constructor(x,y){
        var options = {
            'isStatic':true,
            'restitution':0
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.r = 15;
        
    }
   display(){
    var angle = this.body.angle;
    push();
    translate(this.x, this.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse( 0, 0, 10,10);
    pop();
   }
}