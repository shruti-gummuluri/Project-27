class Rope{
    constructor(body1, body2, xOffset){
        var Options={
            bodyA:body1, bodyB:body2, pointB:{x:xOffset, y:0}
        }
        this.rope= Constraint.create(Options);
        this.Offset = xOffset;
         World.add(world,this.rope);
    }
    display(){
        stroke("green");
        strokeWeight(3);
         var pointA = this.rope.bodyA.position;
          var pointB = this.rope.bodyB.position; 
          line(pointA.x,pointA.y,pointB.x + this.Offset, pointB.y)
    }
}