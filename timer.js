var time = 0;
var timer;

function updateTimer() {
	var min = parseInt(time/60);
	var sec = checkTimer(parseInt(time %60));
	document.getElementById("time").innerHTML = min + ":" + sec;
	time++;
}

function checkTimer(i) {
	if(i < 10)
		i = '0' + i;
	return i;
}

function resetTimer() {
	stopTimer();
	document.getElementById("time").innerHTML = "";
	time = 0;
}

function startTimer() {
	updateTimer();
	timer = setInterval(function() {
		updateTimer()
	}, 1000);
}

function stopTimer() {
	clearInterval(timer);
}