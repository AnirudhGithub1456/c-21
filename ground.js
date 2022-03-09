class Ground{
    constructor(x,y,width,height){
        const options = {
            isStatic: true
          };
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          this.body = Matter.Bodies.rectangle(x, y, width, height, options);
          World.add(world,this.body)
    }
    display(){
        rect(this.x,this.y,this.width,this.height)
        

    }
}
