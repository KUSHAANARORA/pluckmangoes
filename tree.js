
class Tree{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 450, 600,options);
        this.Image = loadImage("images/tree.png")
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.Image,0,-300,450,600);
        pop();
      }
  }
  