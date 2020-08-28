class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.roofObject = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.roofObject);
    }
    display(){
      var pos =this.roofObject.position;
      rectMode(CENTER);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };