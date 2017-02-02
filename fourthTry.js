var photoButton = document.getElementById("123");
photoButton.addEventListener("click",picCapture, false); 

var video = document.getElementById("video");

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) 
{
    // only need access to video at this point
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) 
    {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });

}


function picCapture() 
{
    var c=document.getElementById("capture");
    var ctx=c.getContext("2d");
    
    ctx.drawImage(video,0,0,640,580);
};

















