class Viking{
    constructor(x, y, w, h,angle){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h =h;
        this.angle=90;
        
        
        var options={
            restitution: 0.3
        }

        this.vkImage=loadImage("imagensDosPersonagens/viking0.1.png");
        this.body = Bodies.rectangle(this.x, this.y,this.w,this.h,options);
        World.add(world, this.body);
        //Matter.Body.setAngle(this.body, -PI / 2);
        this.body.debug=true; 
        
    }

    shoot() {
    
        Matter.Body.setVelocity(this.body, {
          x:4, y:3});  
      }

    display(){
        

        if (keyIsDown(LEFT_ARROW)) {
            Matter.Body.setVelocity(this.body, {x:-3,y:0});
        }

        if (keyIsDown(RIGHT_ARROW)) {
            Matter.Body.setVelocity(this.body, {x:3,y:0});
        }

        if (keyIsDown(UP_ARROW)) {
            Matter.Body.setVelocity(this.body, {x:0,y:-4});
        }
        
        push();
     
        imageMode(CENTER);
        image(this.vkImage,this.body.position.x,this.body.position.y, this.w, this.h);
        pop();
    }
}