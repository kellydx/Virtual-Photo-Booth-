			var video = document.getElementById('video');
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');
			

            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;

            if(navigator.getUserMedia){
                navigator.getUserMedia({video:true}, streamWebCam, throwError);
            }

            function streamWebCam (stream) {
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }

            function throwError () {
                alert("Camera is in use or not supported");
            }
            
			function snap() {
			
			canvas.width = video.videoWidth*0.7;
			canvas.height = video.videoHeight*0.71;
			context.drawImage(video, 0, 0, canvas.width, canvas.height);
			}			
			
			function download() {
				var dt = canvas.toDataURL('image/jpeg');
				this.href = dt;
			}
			downloadLnk.addEventListener('click', download, false);
			
			// Add event listener to effect Button (to switch video filters)
			function none(){
			video.className ="none";
            video.style.none; 
			canvas.className = "none";
			canvas.style.none;			
			}
			function grayscale () {	
            
			video.className ="grayscale";
            video.style.grayscale; 
			canvas.className = "grayscale";
			canvas.style.grayscale;			
			}
			function sepia () {	
            
			video.className ="sepia";
            video.style.sepia;   
			canvas.className = "sepia";
			canvas.style.sepia;
			}
			function blur1 () {	
            
			video.className ="blur";
            video.style.blur;  
			canvas.className = "blur";
			canvas.style.gblur;			
			}
			function brightness () {	
            
			video.className ="brightness";
            video.style.brightness;  
			canvas.className = "brightness";
			canvas.style.brightness;			
			}
			function saturate () {	
            
			video.className ="saturate";
            video.style.saturate;    
			canvas.className = "saturate";
			canvas.style.saturate;	
			}
			function hueRotate () {	
            
			video.className ="huerotate";
            video.style.huerotate;  
			canvas.className = "huerotate";
			canvas.style.huerotate;				
			}
			function invert () {	
            
			video.className ="invert";
            video.style.invert;  
			canvas.className = "invert";
			canvas.style.invert;				
			}
			function hueRotate2 () {	
            
			video.className ="huerotate2";
            video.style.huerotate2;   
			canvas.className = "huerotate2";
			canvas.style.huerotate2;				
			}
			function hueRotate3 () {	
            
			video.className ="huerotate3";
            video.style.huerotate3;    
			canvas.className = "huerotate3";
			canvas.style.huerotate3;		
			}
			
			/* When the user clicks on the button,
			toggle between hiding and showing the dropdown content */
			function myFunction() {
				document.getElementById("myDropdown").classList.toggle("show");
	
			}

			// Close the dropdown if the user clicks outside of it
	window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};






