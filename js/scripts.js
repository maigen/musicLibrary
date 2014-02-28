//Music Library that lists multiple songs by multiple artists.

//MusicLibrary is the overall OBJECT.
  //a property (function) of MusicLibrary is songListing, which lists the artist and song name.
  //a property of MusicLibrary is an array of the songs (by number?)

 //Song is an object.
   //a property of Song is artistName
   //a property of Song is songName

/* var MusicLibrary = {
 	
 	songs: []
 };*/

 var Listing = {
 	songListing: function() {
 		return this.artistName + ": " + this.songName;
 	}
 };

var Song = {
	create: function(artistName, songName) {	
		var newSong = Object.create(Song);
		newSong.initialize(artistName, songName);
		return newSong;
	},

	initialize: function(artistName, songName) {
		this.artistName = artistName;
		this.songName = songName;
	}
};

var Artist = {
	create: function(name) {
		var newArtist = Object.create(Artist);
		newArtist.initialize(name);
		return newArtist;
	},

	initialize: function(name) {
		this.name = name;
	}
};

 $(document).ready(function() {
 	$("form#new-song").submit(function(event) {
 		event.preventDefault();

		var artistName = $("input#new-artist-name").val();
	
		$("ul#artistList").append('<li><span class=artistList>' + artistName + '</span></li>');

		$("#add-song").click(function() {
    		$("#new-song").append('<div class="new-song-entry">' +
				                 '<div class="form-group">' +
				                   '<label for="new-song-name">Song Name</label>' +
				                   '<input type="text" class="form-control new-song-name">' +
				                 '</div>' +
				               '</div>');
    	});
 	 	
 	 	$(".artistName").last().click(function() {       
            currentArtit = newArtist;
            $(".current").text(artistName);
         });

 	});
 });










