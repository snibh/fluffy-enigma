function preload() {



}
function setup() {

video = createCapture(VIDEO);
video.size(550,500);
Canvas = createCanvas(550,550);
Canvas.position(560,150);
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);

}
function modelloaded() {

console.log("succes posenet");

}
function draw() {

background('#969A97');


}
function gotPoses(results) {

if(results.length > 0)
{
  console.log(results);
}


}