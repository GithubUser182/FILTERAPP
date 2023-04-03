function preload(){

}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("poseNet is Initialized")
}

function gotPoses(lol){
if(lol.length>0){
console.log(lol)
console.log("nose x= " + lol[0].pose.nose.x)
console.log("nose y= " + lol[0].pose.nose.y)
}
}

function draw(){
    image(video, 0, 0, 300, 300)
}

function take_Snapshot(){
    save("FilterImage.png")
}