 $(document).ready(function(){
 
 	var currentSong;
 	var idnum;
 	var genre;
 	var myCirclePlayer

 	
 	var jsl = new Array();
 	jsl[0] = "Audio/attackontitan.mp3";
 	jsl[1] = "Audio/rvdancingmoon.mp3";
      	
      	
    var ksl = new Array();
 	ksl[0] = "Audio/ElectricShock.mp3";
      	ksl[1] = "Audio/Gee.mp3";

 var ssl = new Array();
 	ssl[0] = "Audio/preciosa.mp3";
      	ssl[1] = "Audio/ElComejen.mp3";




var rjs = Math.ceil(Math.random() * jsl.length) - 1;
var rks = Math.ceil(Math.random() * ksl.length) - 1;
var rss = Math.ceil(Math.random() * ssl.length) - 1;


var getli = document.getElementsByTagName("li");



 $(getli).click( function(){

 $("#jquery_jplayer_1").jPlayer("destroy");
 genre = this.className;
 idnum = this.id;

 if (genre == "japanese")
 	{
 
 	if(idnum == "rjs")
 		{
 			currentSong = jsl[rss];
		}
	else
	 	{
 			currentSong = jsl[idnum];
 		}
	}


else if (genre == "korean")
	{
		
		if(idnum == "rks")
 		{
 			currentSong = ksl[rks];
 		}
 		else
 		{
 			currentSong = ksl[idnum];
 		}

	}
else if (genre == "spanish")
 	{
 	
 	if(idnum == "rss")
 		{
 			currentSong = ssl[rss];
		}
	else
	 	{
 			currentSong = ssl[idnum];
 		}

	}
  myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
			{
				mp3: currentSong
				
				
			}, {
				playlistOptions: {
					enableRemoveControls: true
				},
				cssSelectorAncestor: "#cp_container_1",
				swfPath: "js",
                supplied: "mp3"
              }); 
  	
});

$(".jmheader").click(function(){
	
		$(".japanese").animate({
			height: "toggle"
		}, 500)
	});
$(".smheader").click(function(){
	
		$(".spanish").animate({
			height: "toggle"
		}, 500)
	});
$(".kmheader").click(function(){
	
		$(".korean").animate({
			height: "toggle"
		}, 500)
	});

});