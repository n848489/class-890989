class hrubber {
    constructor(x, y) {
      var options = {
        restitution: 20,
        friction: 0.7,
        density:1,
        
        
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('orange')
      rectMode(CENTER)
      ellipse (0,0,this.r, this.r);
      ellipse (0,0,this.r, this.r);
      pop();
    };
  };