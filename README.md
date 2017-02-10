# Virtual Photo Booth Overview
A browser-based application that utilizes getUserMedia API from HTML5 to gain access to a remote camera and via JavaScript
Provide an advance solution to access the camera within the browser without using third party software (Flash, SilverLight)
# Features
Handling browser compatibility using appropriate syntax( successfully stream video from Google Chrome, Firefox, Opera, Internet Explore and Safari)
Allows users to experience varying visual effects by applying CSS3 filter properties to create the total of 10 different effects
# Technical Issues
Access the local camera from an HTML5 Web page, using the new navigator.getUserMedia(), 
and apply filters on image using CSS3 Filter Property
The Navigator.getUserMedia() method prompts the user for permission to use up to 
one video input device (such as a camera or shared screen)
and up to one audio input device (such as a microphone). 
(However, this feature will soon be removed from the Web standards. 
Though some browsers may still support it, it is in the process of being dropped.
I'll update this project with the new navigator.mediaDevices.getUserMedia soon)
At this point, because of security issues, getUserMedia() should only work on https: protocol. You'll need a SSL certificate for this API to work.
# Future Improvements
Future improvements include a feature to save snapshot to the user’s local hard drive, and develop a mobile version with an efficient user interface to provide user with better interaction

The early stage of this project only work on accessing video devices
Working with audio features will be added later
