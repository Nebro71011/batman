class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("images/Walking Frame/walking_1.png");
        this.bestMan = loadImage("images/bat/Bestman-01.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
        if(frameCount >= 200)
        image(this.bestMan,pos.x,pos.y+70,300,300);
    }
}