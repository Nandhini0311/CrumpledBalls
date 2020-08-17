class Dustbin{
    constructor(){
        var options={
            isStatic:true
        }
       this.body2=Bodies.rectangle(945,325,10,100,options);
       World.add(world,this.body2);
        this.body3=Bodies.rectangle(1060,325,10,100,options);
        World.add(world,this.body3);
        this.body1=Bodies.rectangle(1000,315,1,1,options);
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body1);
       
    }
    display(){
        rectMode(CENTER);
        var pos1=this.body1.position;
        imageMode(CENTER);
        image(this.image,pos1.x,pos1.y,120,120);
        var pos2=this.body2.position;
       var pos3=this.body3.position;
       fill("white");
       rect(pos2.x,pos2.y,10,100);
       rect(pos3.x,pos3.y,10,100);
       // rect(pos1.x,pos1.y,200,10);
        
    }
}