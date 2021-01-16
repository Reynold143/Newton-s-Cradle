class Rope {
    constructor(body1,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 1,
            length: 200
        }
        this.chain= Matter.Constraint.create(options);
        World.add(world,this.chain)

    }
    show(){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
        
    }

}