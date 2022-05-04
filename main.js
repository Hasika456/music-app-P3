song1="";
song2="";

leftWristY=0;
leftWristX=0;

rightWristY=0;
rightWristX=0;

function preload(){
    song1=loadSound("harry_potter.mp3");
    song2=loadSound("believer_song.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0,0,600,500);
}


function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        console.log("Left wrist Y = " + leftWristY + "   Left wrist X = " + leftWristX + "    ||   Right wrist Y = " + rightWristY + "    Right wrist X = " + rightWristX);
        
    }
}