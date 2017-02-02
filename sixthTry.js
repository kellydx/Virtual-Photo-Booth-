			var video = document.getElementById('video');
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');			

            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;

            if(navigator.getUserMedia){
                navigator.getUserMedia({video:true}, streamWebCam, throwError);
            }
			//Access the camera
            function streamWebCam (stream) {
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }
			//throw an error if camera is in use/not supported
            function throwError () {
                alert("Camera is not supported on this device or in use");
            }
            //save canvas as an image
			function snap() {			
				canvas.width = video.videoWidth*0.7;
				canvas.height = video.videoHeight*0.71;
				context.drawImage(video, 0, 0, canvas.width, canvas.height);
			}
			// Add event listener for Filter Button (to switch filters)
			function none(){
				video.className ="none";
				video.style.none;   
			}
			function grayscale () {	            
				video.className ="grayscale";
				video.style.grayscale;    
			}
			function sepia () {	            
				video.className ="sepia";
				video.style.sepia;    
			}
			function blur1 () {	            
				video.className ="blur";
				video.style.blur1;    
			}
			function brightness () {
            
				video.className ="brightness";
				video.style.brightness;    
			}
			function saturate () {	            
				video.className ="saturate";
				video.style.saturate;    
			}
			function hueRotate () {	            
				video.className ="huerotate";
				video.style.hue-rotate;    
			}
			function invert () {	            
				video.className ="invert";
				video.style.invert;    
			}
			function hueRotate2 () {            
				video.className ="huerotate2";
				video.style.huerotate2;    
			}
			function hueRotate3 () {	            
				video.className ="huerotate3";
				video.style.huerotate3;    
			}
			
	/* Mangage Drop Down Buttons */		
	function myFunction() {
		document.getElementById("myDropdown").classList.toggle("show");	
	}

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
