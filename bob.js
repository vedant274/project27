class bob
{
    constructor(x,y,radius)
    {
        var options = {
            isStatic:false,
            'restitution':0.1,
            'friction':0.5,
            'density':6.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        //this.image=loadImage("sprites/paper1.png");
        this.radius = radius;
        // this.height = height;
        
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        //Engine.update(engine);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(0);
        stroke("green");
        fill(rgb(255,0,254));
        circle(0, 0, this.radius);
        pop();
      }
}