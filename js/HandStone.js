class HandStone{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.06,
            length:10
        }
        this.HandStone = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.HandStone);
    }
    display(){
        if(this.HandStone.bodyA){
            var posA = this.HandStone.bodyA.position;
            var posB = this.pointB;
            line(posA.x,posA.y,posB.x,posB.y);
        }

        
    }
    fly(){
        this.HandStone.bodyA = null;
    }
    attach(body){
        this.HandStone.bodyA = body;
    }
}