// Set up data collection with column titles and dummy data
var sensorData = [];
sensorData.push(['milliseconds', 'x', 'y', 'z', 'alpha', 'beta', 'gamma']); 
sensorData.push([0, 1.2234, 4.3478, 8.32478, 20.27893, 4.387892, 1.78923]); 

$("#timer").click(function(){
	var started = $(this).data('started');
	$(this).data('started', !started);

	// Start tracking when user clicks start button
	if(!started){
		gyro.frequency = 10; // 10 ms = 100 Hz
		milliseconds = 0;
		gyro.startTracking(function(o) {
			// o.x, o.y, o.z for accelerometer
			// o.alpha, o.beta, o.gamma for gyro
			document.getElementById("data").innerHTML = 
				"x: " + o.x + "<br/>" 
				+ "y: " + o.y + "<br/>" 
				+ "z: " + o.z + "<br/>" 
				+ "alpha: " + o.alpha + "<br/>" 
				+ "beta: " + o.beta + "<br/>" 
				+ "gamma: " + o.gamma;
			sensorData.push([milliseconds, o.x, o.y, o.z, o.alpha, o.beta, o.gamma]);
			milliseconds = milliseconds + gyro.frequency;
		});
		$(this).data('started', true).prop('value', 'Stop');
		}
	// Stop tracking when user clicks stop button	
	else {
		gyro.stopTracking();
		$(this).data('started', false).prop('value', 'Download');
		console.log(sensorData);

		// Convert sensorData to csv format
		var csvData = "data:text/csv;charset=utf-8,";
		sensorData.forEach(function(infoArray, index){
			dataString = infoArray.join(",");
			csvData += index < sensorData.length ? dataString + "\n" : dataString; 
		});

		// Download data as csv
		var encodedUri = encodeURI(csvData);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "data.csv");

		link.click();
	}

});


