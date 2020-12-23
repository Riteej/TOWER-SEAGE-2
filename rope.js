class Rope{
    constructor(body1,point){
      
    var options={
        bodyA:body1,
        pointB:point,
    stiffness:0.5,
    length:250
    }
    this.pointB=point;
    this.rope=Matter.Constraint.create(options);
    World.add(world,this.rope);
    }
    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(2);
        stroke("skyblue");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();

    }
}



