// Get the current datetime
var now = new Date();

// Format the hours, minutes and seconds from current date time
var hours = now.getHours();
var ampm;

if (hours < 12) {
	ampm = 'AM'
} else {
	ampm = 'PM'
}

if (hours > 12) {
	hours -= 12;
} else if (hours === 0) {
	hours = 12;
}

hours = ("0" + hours).slice(-2);
var minutes = ("0" + now.getMinutes()).slice(-2);
var seconds = ("0" + now.getSeconds()).slice(-2);

// Create the digital clock
var clock_div = document.createElement('div');
// clock_div.className = 'container'

var clock_p = document.createElement('p');
clock_p.id = 'clock';
var clock_time = document.createTextNode(hours + ":" + minutes + ":" + seconds);
clock_p.appendChild(clock_time);
clock_div.appendChild(clock_p);

var ampm_div = document.createElement('div');
var ampm_p = document.createElement('p');
var ampm_text = document.createTextNode(ampm);
clock_div.appendChild(ampm_div);
ampm_p.appendChild(ampm_text);
ampm_div.appendChild(ampm_p);
ampm_p.id = "ampm"

document.getElementById("body").appendChild(clock_div);

function updateTime() {
	now = new Date();

	hours = now.getHours();

	if (hours < 12) {
		ampm = 'AM'
	} else {
		ampm = 'PM'
	}

	if (hours > 12) {
		hours -= 12;
	} else if (hours === 0) {
		hours = 12;
	}

	console.log(hours);

	hours = ("0" + hours).slice(-2);
	minutes = ("0" + now.getMinutes()).slice(-2);
	seconds = ("0" + now.getSeconds()).slice(-2);

	var updated_time = document.createTextNode(hours + ":" + minutes + ":" + seconds);
	var updated_ampm = document.createTextNode(ampm);

	document.getElementById('clock').replaceChild(updated_time, clock_p.childNodes[0]);
	document.getElementById('ampm').replaceChild(updated_ampm, ampm_p.childNodes[0]);
}

function runEverySec() {
	console.log('text')
	setTimeout(function () {
		updateTime();
		runEverySec();
	}, 1000)
}

setTimeout(function() {
	runEverySec()
}, 1000);