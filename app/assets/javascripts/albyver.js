// Music App
// Select a note and a scale 
// Notes in that scale will be displayed
// Alby laptop version

(function () {
	'use strict';
	var sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
	var flats  = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

	var major = {
			index: 0,
			name: 'major',
			interval: [1, 3, 5, 6, 8, 10, 12]
		};

	var minor = {
			index: 1,
			name: 'minor',
			interval: [1, 3, 4, 6, 8, 9, 11]
		};

	var scales = [major, minor];

	var currentScale;
	var currentNoteSet;
	var displayNotes;

	var setCurrentNoteSet = function (set) {
		if (set === 'sharps') {
			currentNoteSet = sharps;
		} else if (set === 'flats') {
			currentNoteSet = flats;
		}
		populateDropdown();
		setScale(currentScale.index);
		updateDisplay();
	};

	// Populate dropdowns
	var populateDropdown = function() {
		$('#key-dropdown').html('');
		for (var i = 0; i < currentNoteSet.length; i++) {
			$('#key-dropdown').append('<option value="' + currentNoteSet[i] + '">' + currentNoteSet[i] + '</option>');
		}
		$('#scale-dropdown').html('');
		for (i = 0; i < scales.length; i++) {
			$('#scale-dropdown').append('<option value="' + i + '">' + scales[i].name + '</option>');
		}
	};

	// Set Key
	var setKey = function (key) {
		var start = currentNoteSet.indexOf(key);
		var newNoteSet = [];
		for (var i = 0; i < currentNoteSet.length; i++) {
			if (!index) {
				var index = start;
			}
			newNoteSet.push(currentNoteSet[index%12]);
			index++;
		}
		currentNoteSet = newNoteSet;
		setScale(currentScale.index);
		updateDisplay();
	};

	// Set Scale
	var setScale = function (index) {
		currentScale = scales[index];
		var interval = currentScale.interval;
		displayNotes = [];
		// Subtract 1 from every value in interval to start at index 0
		for (var i = 0; i < interval.length; i++) {
			displayNotes.push(currentNoteSet[interval[i]-1]);
		}
		updateDisplay();
	};

	// Update display
	var updateDisplay = function() {
		$('#notes').text(displayNotes);
	};

	// Radio Listener
	$(".radio-buttons").change(function() {
		setCurrentNoteSet($('input[name=radios]:checked').val());
	});

	// Key Dropdown Listener
	$('#key-dropdown').on('change', function() {
		setKey($(this).val());
	});

	// Scale Dropdown Listener
	$('#scale-dropdown').on('change', function() {
		setScale($(this).val());
	});

	// Entry point
	currentNoteSet = sharps;
	currentScale = major;
	populateDropdown();
	setKey('A');
	updateDisplay();
})();