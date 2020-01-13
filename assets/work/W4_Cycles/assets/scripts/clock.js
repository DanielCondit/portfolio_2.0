$('html').ready(function() {

	var time = document.getElementById('time');
	var timer = document.getElementById('timer-bar');

	var colorChange = function(time, mult) {
		var change = time * 500 / mult;
		change = parseFloat(change);
		return change.toString(16);
	};

	window.setInterval(function() {
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var current = hours + ":" + minutes + ":" + seconds;
		var current10 = hours + ":" + 0 + minutes + ":" + 0 + seconds;
		var current10min = hours + ":" + 0 + minutes + ":" + seconds;
		var current10sec = hours + ":" + minutes + ":" + 0 + seconds;
		if (minutes < 10 && seconds < 10) {
			console.log(current10);
			time.innerHTML = current10;
		}
		else if (minutes < 10) {
			console.log(current10min);
			time.innerHTML = current10min;
		}
		else if (seconds < 10) {
			console.log(current10sec);
			time.innerHTML = current10sec;
		}
		else {
			console.log(current);
			time.innerHTML = current;
		}

		var percent = seconds / 60;

		console.log(percent);
		timer.style.width = percent * 100 + '%';

		var color = '#' + colorChange(seconds, 10);
		timer.style.background = color;
		console.log(color);

	}, 1000);

});
