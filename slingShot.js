class sling{
constructor(bodyA,pointB){ //{x:200 , y: 20}
var opt = { 
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.2,
    length:20
}
this.pointB=pointB
this.slings=Constraint.create(opt)
World.add(world,this.slings)
}

fly(){
    this.slings.bodyA = null
  }

display(){
    if(this.slings.bodyA){
var pa=this.slings.bodyA.position
var pb=this.pointB
stroke(255)
line(pa.x,pa.y,pb.x+9,pb.y)
line(pa.x,pa.y,pb.x-9,pb.y)
    }
}
}
