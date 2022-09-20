nosex=0;
nosey=0;
leftx=0;
rightx=0;
diffrence=0;
function setup(){
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}
function modelloaded(){
    console.log("model is inistiliazed!");
}
function gotposes(results){
      if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftx=results[0].pose.leftWrist.x;
        rightx=results[0].pose.rightWrist.x;
        diffrence=floor(leftx-rightx);
      }
}
function draw(){
    background('orange');
   document.getElementById("square side") .innerHTML="width and heigth of the square will be   "+diffrence+"px";
   fill('blue');
   stroke('red');
   square(nosex,nosey,diffrence);
}