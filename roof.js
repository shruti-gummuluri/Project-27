class Roof{
    constructor(){
        var Options={
            isStatic: true
        }
        this.body=Bodies.rectangle(400,100,300,20,Options);
        World.add(world,this.body);
    }
    display(){
        fill ("pink");
        rect(this.body.position.x, this.body.position.y, 300,20);
    }
}