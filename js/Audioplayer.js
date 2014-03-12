 $(document).ready(function(){
 
 	var currentSong;
 	var idnum;
 	var genrename;
 	var myCirclePlayer;
	var tags;

 	
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


ID3.loadTags("Audio/attackontitan.mp3", function(){
tags = ID3.getAllTags("Audio/attackontitan.mp3");
alert(tags.artist + " - " + tags.title + ", " + tags.album);
});


var getli = document.getElementsByTagName("li");
$(getli).hover(function(){
$(getli).css("cursor", "pointer");
});


 $(getli).click( function(){
$(getli).css("cursor", "wait");
 $("#jquery_jplayer_1").jPlayer("destroy");
 genrename = this.className;
 idnum = this.id;
alert(genre);
 if(genre == "jmheader")
	{
		$(".japanese").animate({
			height: "toggle"
		}, 500)
	}
else if (genre == "kmheader")
	{
		$(".korean").animate({
			height: "toggle"
		}, 500)
	}
else if (genre == "smheader")
	{
		$(".spanish").animate({
			height: "toggle"
		}, 500)
	}
	
else if (genre == "japanese")
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
});