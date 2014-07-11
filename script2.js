// Code below didn't work because of the $

$("#timer").click(function(){
	var started = $(this).data('started');
	$(this).data('started', !started);
	var sampling;
	if(!started){
		// Start tracking when user clicks start button
		gyro.frequency = 1000;
		gyro.startTracking(function(o) {
			// o.x, o.y, o.z for accelerometer
			// o.alpha, o.beta, o.gamma for gyro
			document.getElementById("data").innerHTML = "x: " + o.x + "<br />" + "y: " + o.y + "<br />" + "z: " + o.z;
		});
		$(this).data('started', true).prop('value', 'Stop');
		}
	else {
		// Stop tracking when user clicks stop button
		gyro.stopTracking();
		$(this).data('started', false).prop('value', 'Done');
	}

});

