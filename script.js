// Accelerometer Variables
var ax = 0;
var ay = 0;
var az = 0;

// Gyroscope Variables
//var alpha = 0;
//var beta = 0;
//var gamma = 0;

// Sampling frequency in ms (50 ms = 100 Hz)
freq = 1000;
var collecting = false;

/*
// Wait until user clicks on button
$("#timer").click(function(){
	var started = $(this).data('started');
	$(this).data('started', !started);
	var sampling;
	if(!started){
		// Set accelerometer sampling interval
		sampling = setInterval(collectMotionLite, freq);
		$(this).data('started', true).prop('value', 'Stop');
		}
	else {
		// Stop interval when user clicks stop button
		clearInterval(sampling);
		$(this).data('started', false).prop('value', 'Done');
	}

});
*/


/*
if(window.DeviceMotionEvent==undefined){
	document.getElementById("no").style.display="block";
	document.getElementById("yes").style.display="none";
} 
	else {
	window.ondevicemotion = function(event){
		
		// Initialize Start/Stop button

		var c;

		$("#timer").click(function() {
			var started = $(this).data('started');
			$(this).data('started', !started);
			if (!started){
				c = setInterval(collectMotion, freq);
				$(this).data('started', true).prop('value', 'Stop');
			}
			else {
				$(this).data('started', false).prop('Start');
				clearInterval(c);
			}
		});
	} 
}*/

function collectMotionLite(event){
	window.ondevicemotion = function(event){
		// Set acceleration variables to data
			ax = event.accelerationIncludingGravity.x;
			ay = event.accelerationIncludingGravity.y;
			az = event.accelerationIncludingGravity.z;

			// Print data real-time
			document.getElementById("data").innerHTML = "x: " + ax + "<br />" + "y: " + ay + "<br />" + "z: " + az;
	}
}

function collectMotion(event){
	// Check if accelerometer exists
	if(window.DeviceMotionEvent==undefined){
		document.getElementById("no").style.display="block";
		document.getElementById("yes").style.display="none";
	}
		else {
			window.ondevicemotion = function(event){
				if collecting === true
				// Set acceleration variables to data
				ax = event.accelerationIncludingGravity.x;
				ay = event.accelerationIncludingGravity.y;
				az = event.accelerationIncludingGravity.z;

				// Print data real-time
				document.getElementById("data").innerHTML = "x: " + ax + "<br />" + "y: " + ay + "<br />" + "z: " + az;
			}
		}	
}

// Snippet borrowed from StackOverflow: downloading data to csv file

/*var content = [['1st title', '2nd title', '3rd title', '4th title'], ['a a a', 'bb\nb', 'cc,c', 'dd"d'], ['www', 'xxx', 'yyy', 'zzz']];

var finalVal = '';

for (var i = 0; i < content.length; i++) {
    var value = content[i];
    
    for (var j = 0; j < value.length; j++) {
        var innerValue = value[j];
        var result = innerValue.replace(/"/g, '""');
        if (result.search(/("|,|\n)/g) >= 0)
            result = '"' + result + '"';
        if (j > 0)
            finalVal += ',';
        finalVal += result;
    }
    
    finalVal += '\n';
}

var pom = document.createElement('a');
pom.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(finalVal));
pom.setAttribute('download', 'test.csv');
pom.click();

*/

// Snippet borrowed from Elia Contini's blog: "Export to CSV using JavaScript: the download attribute"
// some data to export
/*
var data = [
  {"title": "Book title 1", "author": "Name1 Surname1"},
  {"title": "Book title 2", "author": "Name2 Surname2"},
  {"title": "Book title 3", "author": "Name3 Surname3"},
  {"title": "Book title 4", "author": "Name4 Surname4"}
];

// prepare CSV data
var csvData = new Array();
csvData.push('"Book title","Author"');
data.forEach(function(item, index, array) {
  csvData.push('"' + item.title + '","' + item.author + '"');
});

// download stuff
var buffer = csvData.join("\n");
var uri = "data:text/csv;charset=utf8," + encodeURIComponent(buffer);
var fileName = "data.csv";

var link = document.createElement("a");
if(link.download !== undefined) { // feature detection
  // Browsers that support HTML5 download attribute
  link.setAttribute("href", uri);
  link.setAttribute("download", fileName);
}
else {
  // it needs to implement server side export
  link.setAttribute("href", "http://www.example.com/export");
}
link.innerHTML = "Export to CSV";
document.body.appendChild(link);
*/


gyro.startTracking(function(o) {
        // o.x, o.y, o.z for accelerometer
        // o.alpha, o.beta, o.gamma for gyro

        document.getElementById("data").innerHTML = "x: " + o.x + "<br />" + "y: " + o.y + "<br />" + "z: " + o.z;

    });

