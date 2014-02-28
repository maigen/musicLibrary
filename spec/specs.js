describe("Listing", function() {
  describe("songListing", function() {
    it('returns the song name and artist name in a specific format', function() {
	  var testListing = Object.create(Listing);
	  testListing.songName = "Harvest Moon";
	  testListing.artistName = "Poolside";
	  testListing.songListing().should.equal("Poolside: Harvest Moon")
	});
  });
});

describe("Song", function() {
	describe("initialize", function(artistName, songName) {
		it("adds a new song to the object (Artist)", function() {
			var testSong = Object.create(Song);
			testSong.initialize("Poolside", "Harvest Moon");
			testSong.artistName.should.equal("Poolside");
			testSong.songName.should.equal("Harvest Moon");
		});
	});
	describe("create", function(artistName, songName) {
		it("creates a new entry for the song entered", function() {
			var testSong = Song.create();
			Song.isPrototypeOf(testSong).should.equal(true);
		});
	});
});

describe("Artist", function() {
  describe("initialize", function(name) {
	it("adds a new Artist name to the collection", function() {
		var testArtist = Object.create(Artist);
		testArtist.initialize("Michael Jackson");
		testArtist.name.should.equal("Michael Jackson");
	});
  });
  describe("create", function() {
  	it("creates a new Artist category", function() {
  		var testArtist = Artist.create();
  		Artist.isPrototypeOf(testArtist).should.equal(true);
  	});
  });
});
