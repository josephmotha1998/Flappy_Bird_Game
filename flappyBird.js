var bird;
var pipes=[];


function setup(){
	bg=loadImage("download.png");
	createCanvas(600,600);
	bird=new Bird();
	pipes.push(new Pipe());

}

function draw(){
	background(bg);

	for(var i=pipes.length-1;i>=0;i--){
		pipes[i].show();
		pipes[i].update();

		if(pipes[i].hits(bird)){

		}
		if(pipes[i].offScreen()){
			pipes.splice(i,1);
		}

	}

	bird.think();

	bird.update();
	bird.show();
	

	if(frameCount%100==0){
		pipes.push(new Pipe());
	}

}

// function keyPressed(){
// 	if(key===" "){
// 		bird.up();
// 	}
// }