class Bob {
    constructor(x,y){
     var options ={
        isStatic: true
         }
         
    this.bobObject1 = Bodies.circle(x,y,20,options);
    this.r =70 ;
    World.add(world, this.bobObject1);
    
    /*this.bobObject2 = Bodies.circle(x,y,20,options);
    this.r =30 ;
    World.add(world, this.bobObject2);
    
    this.bobObject3 = Bodies.circle(x,y,20,options);
    this.r =30 ;
    World.add(world, this.bobObject3);
   
    this.bobObject4 = Bodies.circle(x,y,20,options);
    this.r =30 ;
    World.add(world, this.bobObject4);
   
    this.bobObject5 = Bodies.circle(x,y,20,options);
    this.r =30 ;
    World.add(world, this.bobObject5);*/
        }
    display(){
    
    var pos = this.bobObject1.position;
    push();
    translate(pos.x , pos.y);
    rectMode(CENTER);
    
    fill("pink");
    ellipse(0,0,this.r);
    pop();

    /*var pos = this.bobObject2.position;
    push();
    translate(pos.x , pos.y);
    rectMode(CENTER);
    
    fill("pink");
    ellipse(0,0,this.r);
    pop();

    var pos = this.bobObject3.position;
    push();
    translate(pos.x , pos.y);
    rectMode(CENTER);
    
    fill("pink");
    ellipse(0,0,this.r);
    pop();

    var pos = this.bobObject4.position;
    push();
    translate(pos.x , pos.y);
    rectMode(CENTER);
    
    fill("pink");
    ellipse(0,0,this.r);
    pop();
    var pos = this.bobObject5.position;
    push();
    translate(pos.x , pos.y);
    rectMode(CENTER);
    
    fill("pink");
    ellipse(0,0,this.r);
    pop();*/
        }
    };