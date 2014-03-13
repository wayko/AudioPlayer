 $(document).ready(function(){
 
 	var currentSong;
 	var idnum;
 	var genrename;
 	var myCirclePlayer;
	var liclass;
	var tags

 	
 	var jsl = new Array();
		jsl[0] = "Audio/attackontitan.mp3";
		jsl[1] = "Audio/rvdancingmoon.mp3";
		jsl[2] = "Audio/AmeAgari.mp3";
		jsl[3] = "Audio/readysteadygo.mp3";
		jsl[4] = "Audio/KaleidoStaropeningSong.mp3";
		jsl[5] = "Audio/KaleidoStarEndingSong.mp3";
		jsl[6] = "Audio/TrigunFuku.mp3";
		jsl[7] = "Audio/BeMyAngel.mp3";
		jsl[8] = "Audio/BalladRanmaAkane.mp3";
      	
      	
    var ksl = new Array();
		ksl[0] = "Audio/ElectricShock.mp3";
      	ksl[1] = "Audio/Gee.mp3";

	var ssl = new Array();
		ssl[0] = "Audio/preciosa.mp3";
      	ssl[1] = "Audio/ElComejen.mp3";
	var isl = new Array();
	
	







var getli = document.getElementsByTagName("li");

$(getli).hover(function(){
$(getli).css("cursor", "pointer");
});


 $(getli).click( function(){
 var rjs = Math.ceil(Math.random() * jsl.length) - 1;
	var rks = Math.ceil(Math.random() * ksl.length) - 1;
	var rss = Math.ceil(Math.random() * ssl.length) - 1;
$(getli).css("cursor", "wait");
 $("#jquery_jplayer_1").jPlayer("destroy");
  idnum = this.id;
  liclass = $(this).attr('class');
  alert(rjs);
 
 if(liclass == "jmheader")
	{
		$(".anime").animate({
			height: "toggle"
		}, 500)
	}
else if (liclass == "kmheader")
	{
		$(".korean").animate({
			height: "toggle"
		}, 500)
	}
else if (liclass == "smheader")
	{
		$(".spanish").animate({
			height: "toggle"
		}, 500)
	}
	
else if (liclass == "anime")
 	{
	
 	if(idnum == "rjs")
 		{
 			currentSong = jsl[rjs];
		}
	else
	 	{
 			currentSong = jsl[idnum];
 		}
	}


else if (liclass == "korean")
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
else if (liclass == "spanish")
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
   alert(currentSong);
  /**
     * Loading the tags using XHR.
     */
    //sample.mp3 sits on your domain
    ID3.loadTags(currentSong, function() {
      showTags(currentSong);
    }, {
      tags: ["title","artist","album","genre"]
	  });

    /**
     * Loading the tags using the FileAPI.
     */
    function loadFile(input) {
      var file = input.files[0],
        url = file.urn || file.name;

      ID3.loadTags(url, function() {
        showTags(url);
      }, {
        tags: ["title","artist","album","genre"],
        dataReader: FileAPIReader(file)
      });
    }

    /**
     * Generic function to get the tags after they have been loaded.
     */
    function showTags(url) {
      tags = ID3.getAllTags(url);
      console.log(tags);
	  genrename=tags.genre;
	  document.getElementById('title').textContent = tags.title || "";
      document.getElementById('artist').textContent = tags.artist || "";
      document.getElementById('album').textContent = tags.album || "";
	  document.getElementById('genre').textContent = tags.genre || "";
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