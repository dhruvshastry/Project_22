class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB
		this.bodyA=this.bodyA
		this.bodyB=this.bodyB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}

		}

		this.body=Matter.Constraint.create(options)
     	World.add(world,this.body)
		}

	


    show(){//create display() here 
	push()
	var pointA=this.body.bodyA.position;
	var pointB=this.body.bodyB.position;
	stroke("red")
	strokeWeight(4)
    line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB)
	pop()
	}


}
