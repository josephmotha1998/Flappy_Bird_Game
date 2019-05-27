function Bird(){


	this.y=height/2;
	this.x=64;

	this.gravity=0.6;
	this.lift=-15;
	this.velocity=0;

	this.brain=new NeuralNetwork(4,4,1);

	this.show=function(){
		fill(255,255,102);
		ellipse(this.x,this.y,32,32);
	}

	this.think=function(){





		let inputs=[1,0.5,0.2,0.3];
		let output=this.brain.predict(inputs);
		if(output>0.5){
			this.up();
		}
	}

	this.update=function(){

		this.velocity+=this.gravity;
		this.velocity*=0.9;
		this.y+=this.velocity;
		
		if(this.y>height){
			this.y=height;
			this.velocity=0;
		}

		if(this.y<0){
			this.y=0;
			this.velocity=0;
		} 

	}

	this.up=function(){
		this.velocity+=this.lift;
	}
}