class Ball{
    constructor(x,y,r){
        var Options={
            restitution: 1,
            density : 0.8
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r,Options);
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill ("red")
        ellipse(0,0,this.r*2, this.r*2);
        pop();
    }
}