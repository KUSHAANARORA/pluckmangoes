
class Stone{
    constructor(x, y,radius) {
        var options = {
          isStatic:false,
          restitution :0,
          friction: 1,
          density: 1.5
        }
        this.body = Bodies.circle(x, y,radius,options);
        this. radius = radius
        this.Image = loadImage("images/stone.png")
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.Image,0,0,this.radius,this.radius);
        pop();
      }
  }
  