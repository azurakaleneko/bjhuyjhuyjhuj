narizX=0;
narizY=0;
muñecaderechaX=0;
muñecaizquierdaX=0;
diferencia=0;


function setup(){
  video= createCapture(VIDEO);
  video.size(550,500);

canvas= createCanvas(550,550)  
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
  console.log ("PoseNet cfgbbhg")
}

function gotPoses(results){
  if(results.length>0){
    console.log(results); 
    narizX=results[0].pose.nose.x;
    narizY=results[0].pose.nose.y;
    console.log("nariz en x:"+ narizX + "nariz de y:"+ narizY);
    

    muñecaderechaX=results[0].pose.rightWrist.x;
    muñecaizquierdaX=results[0].pose.leftWrist.x;
    diferencia=floor(muñecaderechaX-muñecaizquierdaX);

    console.log("muñeca izquierda en x:"+ muñecaizquierdaX + "muñeca derecha de x:"+ muñecaderechaX + "diferencia" + diferencia);
  }
}


function draw(){
    background("#246E3F");
    fill("#A73F3F");
    stroke("#FFFFC2");
    square(narizX, narizY, diferencia);
}

