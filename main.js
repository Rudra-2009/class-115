function preLoad() {

}
function setup() {
 canvas=createCanvas(400,400);
 canvas.center();
 video=createCapture(VIDEO);
 video.size(400,400);
 video.hide();
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}
function draw() {
 image(video,0,0,400,400);
}
function takeSnapshot() {
 save('download.png');
}
function modelLoaded() {
    console.log('PoseNet is Initialised');
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
    }
}
