# AudioPlayer
Using jPlayer’s circle player I created a random music player. Here is the jQuery code

$(document).ready(function(){

var currentSong; //create a variable to get the current song

var songlists = new Array(); //create an empty array 

songlists[0] = “/Audio/preciosa.mp3″; 

songlists[1] = “/Audio/ElComejen.mp3″;

songlists[2] = “/Audio/rvdancingmoon.mp3″;

var random = Math.ceil(Math.random() * songlists.length) – 1; //create a random number 

currentSong = songlists[random]; //use the random number to select a one of the songs from the array list and assign the song to currentSong variable

var myCirclePlayer = new CirclePlayer(“#jquery_jplayer_1″, //create a new instance of CirclePlayer

{

mp3: currentSong 

}, {

playlistOptions: {

enableRemoveControls: true //enable or disable controller

},

cssSelectorAncestor: “#cp_container_1″,

swfPath: “js”,

supplied: “mp3″ //get audio file type

});

});

Here is the html code

<div id="jquery_jplayer_1"></div>

<div> <!-- A wrapper to emulate use in a webpage and center align --><!-- The container for the interface can go where you want to display it. Show and hide it as you need. -->

<div id="cp_container_1">

<div> <!-- .cp-gt50 only needed when buffer is > than 50% -->

<div></div>

<div></div></div>

<div> <!-- .cp-gt50 only needed when progress is > than 50% -->

<div></div>

<div></div></div>

<div></div>

<ul>

<li><a tabindex="0"></a></li>

<li><a tabindex="0"></a></li> <!-- Needs the inline style here, or jQuery.show() uses display:inline instead of display:block -->

</ul></div></div></div>
You reference the three js files
<script type="text/javascript" src="js/jquery.jplayer.js"></script>
<script type="text/javascript" src="js/circle.player.js"></script>
<script type="text/javascript" src="js/Audioplayer.js" ></script>
