console.log('loaded keys.js');

// (function() {
// 	var option = _.template('<option value="<%= val %>"> <%= name %></select>');
// 	// Fields //

// 	// 0   1   2   3   4   5   6   7   8   9   10   11    => Array Index
// 	// 1   2   3   4   5   6   7   8   9   10  11   12    => Scale Degree
// 	// A   A#  B   C   C#  D   D#  E   F   F#  G    G#    => Note Names (Sharps)
// 	//     Bb          Db      Eb          Gb       Ab    => Flats

// 	// All 12 notes
// 	var notes  = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
// 	var notes  = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];



// 	// w w h w w w h
// 	var major = [0,2,4,5,7,9,11,12];

// 	// chords
// 	// major
// 	// M3 m3
// 	// minor
// 	// m3 M3
// 	// dim
// 	// m3 m3
// 	// aug
// 	// M3 M3

// 	// major scale
// 	// I ii iii IV V vi vii° I
// 	// minor scale
// 	// i ii° III  iv v VI VII i
// 	// harmonic minor
// 	// i ii° III iv V VI vii° i
// 	// dorian
// 	// i ii III IV V vi° VII i
// 	// lydian
// 	// I II iii iv° V vi vii I

// 	// w h w w h w w
// 	var minor = [0,2,3,5,7,8,10,12];

// 	// w h w w h a h
// 	var harmonicMinor = [0,2,3,5,7,8,11,12];

// 	// All Scales
// 	var scales = [major, minor, harmonicMinor];

// 	// Current key and scale
// 	var key = 'A';
// 	var scale = major;

// 	// functions //
// 	var setKey = function (key) {
// 		key = key;

// 		setNotes();
// 	}

// 	var setScale = function (index) {
// 		// Update Display
// 		scale = scales[index];
// 		setNotes();
// 	}

// 	var setNotes = function() {
// 		// Empty array to fill with note-y goodness
// 		var displayNotes = [];

// 		// Where in array is our key?
// 		var start = notes.indexOf(key);

// 		var newScale = [];
// 		for (var i = 0; i < 13; i++) {
// 			if (!index) {
// 				var index = start;
// 			}
// 			newScale.push(notes[index % 12]);
// 			index++;
// 		}
// 		for (var i = 0; i < scale.length; i++) {
// 			displayNotes.push(newScale[scale[i]]);
// 		}

// 		printNotes(displayNotes);
// 	}

// 	var printNotes = function (newNotes) {
// 		$('#notes').html('');
// 		for (var i = 0; i < scale.length; i++) {
// 			$("#notes").append(newNotes[i] + " ");
// 		}
// 	}

// 	function populateScaleDropdown() {
// 		// <option value="2">harmonic minor</option>
// 		$('#scale-dropdown').append(option({val: '', name: 'moe'}););
// 	}

// 	function populateKeyDropdown() {
// 		// <option value="G#">G#</option>
// 		$('#scale-dropdown').append();
// 	}

// 	// Listeners //
// 	$('#scale-dropdown').on('change', function (e) {
// 		e.preventDefault();
// 		scaleIndex = $(this).val();
// 		// Update Display
// 		$('#scale').text($(this).find(":selected").text());
// 		setScale(scaleIndex);
// 	});

// 	$('#key-dropdown').on('change', function (e) {
// 		e.preventDefault();
// 		key = $(this).val();
// 		// Update Display
// 		$('#key').text(key);
// 		setKey(key);
// 	});

// 	// Begin
// 		setNotes();
// })();
