let input = document.getElementsByTagName('input');
let convertButton = document.querySelector('button');
let selection = document.getElementsByTagName('select');

convertButton.addEventListener('click', function() {
	if (input[0].value == '')
		return alert('Unesite vrednost!');

	switch (selection[0].selectedIndex) {
		case 0: { // km
			switch (selection[1].options[selection[1].selectedIndex].value) {
				case 'Kilometri': {
					input[1].value = input[0].value;
					break;
				}

				case 'Metri': {
					input[1].value = input[0].value * 1000;
					break;
				}

				case 'Centimetri': {
					input[1].value = input[0].value * 100000;
					break;
				}

				case 'Milimetri': {
					input[1].value = input[0].value * 1000000;
					break;
				}

				case 'Mikrometri': {
					input[1].value = input[0].value * 1000000000;
					break;
				}

				case 'Nanometri': {
					input[1].value = input[0].value * 1000000000000;
					break;
				}

				case 'Milje': {
					input[1].value = input[0].value / 1.609;
					break;
				}

				case 'Inci': {
					input[1].value = input[0].value * 39370;
					break;
				}
			}

			break;
		}

		case 1: { // m
			switch (selection[1].options[selection[1].selectedIndex].value) {
				case 'Kilometri': {
					input[1].value = input[0].value / 1000;
					break;
				}

				case 'Metri': {
					input[1].value = input[0].value;
					break;
				}

				case 'Centimetri': {
					input[1].value = input[0].value * 100;
					break;
				}

				case 'Milimetri': {
					input[1].value = input[0].value * 1000;
					break;
				}

				case 'Mikrometri': {
					input[1].value = input[0].value * 1000000;
					break;
				}

				case 'Nanometri': {
					input[1].value = input[0].value * 1000000000;
					break;
				}

				case 'Milje': {
					input[1].value = input[0].value / 1609;
					break;
				}

				case 'Inci': {
					input[1].value = input[0].value * 39.37;
					break;
				}
			}

			break;
		}

		case 2: { // cm
			switch (selection[1].options[selection[1].selectedIndex].value) {
				case 'Kilometri': {
					input[1].value = input[0].value / 100000;
					break;
				}

				case 'Metri': {
					input[1].value = input[0].value / 100;
					break;
				}

				case 'Centimetri': {
					input[1].value = input[0].value;
					break;
				}

				case 'Milimetri': {
					input[1].value = input[0].value * 10;
					break;
				}

				case 'Mikrometri': {
					input[1].value = input[0].value * 10000;
					break;
				}

				case 'Nanometri': {
					input[1].value = input[0].value * 10000000;
					break;
				}

				case 'Milje': {
					input[1].value = input[0].value / 160934;
					break;
				}

				case 'Inci': {
					input[1].value = input[0].value / 2.54;
					break;
				}
			}

			break;
		}

		case 3: { // mm
			switch (selection[1].options[selection[1].selectedIndex].value) {
				case 'Kilometri': {
					input[1].value = input[0].value / 1000000;
					break;
				}

				case 'Metri': {
					input[1].value = input[0].value / 1000;
					break;
				}

				case 'Centimetri': {
					input[1].value = input[0].value / 10;
					break;
				}

				case 'Milimetri': {
					input[1].value = input[0].value;
					break;
				}

				case 'Mikrometri': {
					input[1].value = input[0].value * 1000;
					break;
				}

				case 'Nanometri': {
					input[1].value = input[0].value * 1000000;
					break;
				}

				case 'Milje': {
					input[1].value = input[0].value / 1609000;
					break;
				}

				case 'Inci': {
					input[1].value = input[0].value / 25.4;
					break;
				}
			}

			break;
		}

		case 4: { // micro m
			switch (selection[1].options[selection[1].selectedIndex].value) {
				case 'Kilometri': {
					input[1].value = input[0].value / 1000000000;
					break;
				}

				case 'Metri': {
					input[1].value = input[0].value / 0.000001;
					break;
				}

				case 'Centimetri': {
					input[1].value = input[0].value / 10000;
					break;
				}

				case 'Milimetri': {
					input[1].value = input[0].value / 1000;
					break;
				}

				case 'Mikrometri': {
					input[1].value = input[0].value;
					break;
				}

				case 'Nanometri': {
					input[1].value = input[0].value * 1000;
					break;
				}

				case 'Milje': {
					input[1].value = input[0].value / 1609000000;
					break;
				}

				case 'Inci': {
					input[1].value = input[0].value / 25400;
					break;
				}
			}

			break;
		}

		case 5: { // nm
			switch (selection[1].options[selection[1].selectedIndex].value) {
				case 'Kilometri': {
					input[1].value = input[0].value / 1e+12;
					break;
				}

				case 'Metri': {
					input[1].value = input[0].value / 1e+9;
					break;
				}

				case 'Centimetri': {
					input[1].value = input[0].value / 1e+7;
					break;
				}

				case 'Milimetri': {
					input[1].value = input[0].value / 1e+6;
					break;
				}

				case 'Mikrometri': {
					input[1].value = input[0].value / 1000;
					break;
				}

				case 'Nanometri': {
					input[1].value = input[0].value;
					break;
				}

				case 'Milje': {
					input[1].value = input[0].value / 1.609e+12;
					break;
				}

				case 'Inci': {
					input[1].value = input[0].value / 2.54e+7;
					break;
				}
			}

			break;
		}

		case 6: { // miles
			switch (selection[1].options[selection[1].selectedIndex].value) {
				case 'Kilometri': {
					input[1].value = input[0].value * 1.609;
					break;
				}

				case 'Metri': {
					input[1].value = input[0].value * 1609;
					break;
				}

				case 'Centimetri': {
					input[1].value = input[0].value * 160934;
					break;
				}

				case 'Milimetri': {
					input[1].value = input[0].value * 1.609e+6;
					break;
				}

				case 'Mikrometri': {
					input[1].value = input[0].value * 1.609e+9;
					break;
				}

				case 'Nanometri': {
					input[1].value = input[0].value * 1/609e+12;
					break;
				}

				case 'Milje': {
					input[1].value = input[0].value;
					break;
				}

				case 'Inci': {
					input[1].value = input[0].value * 63360;
					break;
				}
			}

			break;
		}

		case 7: { // inches
			switch (selection[1].options[selection[1].selectedIndex].value) {
				case 'Kilometri': {
					input[1].value = input[0].value / 39370;
					break;
				}

				case 'Metri': {
					input[1].value = input[0].value / 39.37;
					break;
				}

				case 'Centimetri': {
					input[1].value = input[0].value * 2.54;
					break;
				}

				case 'Milimetri': {
					input[1].value = input[0].value * 25.4;
					break;
				}

				case 'Mikrometri': {
					input[1].value = input[0].value * 25400;
					break;
				}

				case 'Nanometri': {
					input[1].value = input[0].value * 2.54e+7;
					break;
				}

				case 'Milje': {
					input[1].value = input[0].value / 63360;
					break;
				}

				case 'Inci': {
					input[1].value = input[0].value;
					break;
				}
			}

			break;
		}
	}
});
