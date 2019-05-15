function Pipe(){
	this.top=random(height/2);
	this.bottom=this.top+80;
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
		if(bird.y<this.top||bird.y>this.bottom){
			if(bird.x>this.x&&bird.x<this.x+this.w){
				this.highlight=true;
				return true;
			}
		}
		return false;
	}

	this.collision=function(){

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