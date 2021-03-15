class stones  {
    constructor(x,y) {
        var options = {
            isStatic:false,
            'restitution':1,
            'friction':0,
            'density':7.8
            
        }
        
        this.body = Bodies.circle(x,y,5, options);
        World.add(world,this.body)
        
        console.log(this.body);
      }
     
      display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
       var pos=this.body.position
        push();
       
  
        ellipseMode(RADIUS);
        fill("grey");
        ellipse(pos.x, pos.y,20,20);
        pop();
      }
  };
  