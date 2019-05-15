function Pipe(){
	this.top=random(height/2);
	this.gap=100;
	this.bottom=this.top+this.gap;
	this.x=width;
	this.w=20;
	this.speed=2;

	this.show=function(){
		fill(255);
		if (this.highlight===true){
			fill(255,0,0);
		}
		rect(this.x,0,this.w,this.top);
		rect(this.x,this.bottom,this.w,height-(this.bottom));  
	}

	this.highlight=false;

	this.hits=function(bird){
		if(bird.y-16<this.top||bird.y+16>this.bottom){
			if(bird.x+16>this.x&&!(bird.x-16>this.x+this.w)){
				console.log("collision");
				this.highlight=true; 
				return true;
			}
		}
		return false;
	}


	this.update=function(){
		this.x-=this.speed;
	}

	this.offScreen=function(){
		if(this.x<-this.w){
			return true;
		}
		else{
			return false;
		}
	}
}