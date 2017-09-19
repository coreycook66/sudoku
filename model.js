//view
//two dimentional array. one for answer grid one for start grid		 
currentGrid = [[,,,,,,,,],
			   [,,,,,,,,],
			   [,,,,,,,,],
			   [,,,,,,,,],
			   [,,,,,,,,],
			   [,,,,,,,,],
			   [,,,,,,,,],
			   [,,,,,,,,],
			   [,,,,,,,,]];
//request for json file that contains all of the start grids and answer grids
//for each puzzle
var request = new XMLHttpRequest();
request.open("GET", "game.json", false);
request.send(null);
	
var json = JSON.parse(request.responseText);
//controller
function getNum(i,j)
{

	var num;
	//check difficulty
	//assign currentGrid to the start grid
	//current grid will be updated as numbers are input from user
	if(diff === "easy1") {
		num = json.easy1StartGrid[i][j];
		currentGrid = json.easy1StartGrid;
	}
	else if(diff === "easy2") {
		num = json.easy2StartGrid[i][j];
		currentGrid = json.easy2StartGrid;
	}
	else if(diff === "medium1") {
		num = json.medium1StartGrid[i][j];
		currentGrid = json.medium1StartGrid;
	}
	else if(diff === "medium2") {
		num = json.medium2StartGrid[i][j];
		currentGrid = json.medium2StartGrid;
	}
	else if(diff == "hard1") {
		num = json.hard1StartGrid[i][j];
		currentGrid = json.hard1StartGrid;
	}
	else if(diff == "hard2") {
		num = json.hard2StartGrid[i][j];
		currentGrid = json.hard2StartGrid;
	}
	//return empty string if the data in the array is zero
	if(num===0)
		return '';
	else
		return num;//return the data in the array
}

//default board set to easy
var diff = "easy1";
function difficulty() {
	diff = document.getElementById("mySelect").value;
	//recall drawBoard everytime difficulty is changed
	drawBoard();
	//reset timer when difficulty is changed
	resetTimer();
	startTimer();
	return diff;
}

//compare user entered value with answer grid. return number in location of user 
// entered nuber.
function compare(i, j) {
	var num;
	if(diff === "easy1")
		num = json.easy1AnswerGrid[i][j];
	else if(diff === "easy2")
		num = json.easy2AnswerGrid[i][j];
	else if(diff === "medium1")
		num = json.medium1AnswerGrid[i][j];
	else if(diff === "medium2")
		num = json.medium2AnswerGrid[i][j];
	else if(diff == "hard1")
		num = json.hard1AnswerGrid[i][j];
	else if(diff == "hard2")
		num = json.hard2AnswerGrid[i][j];
	return num;
}

//set equal to answer grid to check with current grid
var endNum = json.easy1AnswerGrid;
//return answer grid of board that user selects.  Compare with current grid to check
//if finished
function endGame() {
	if(diff === "easy1")
		endNum = json.easy1AnswerGrid;
	else if(diff === "easy2")
		endNum = easy2AnswerGrid;
	else if(diff === "medium1")
		endNum = json.medium1AnswerGrid;
	else if(diff === "medium2")
		endNum = json.medium2AnswerGrid;
	else if(diff == "hard1")
		endNum = json.hard1AnswerGrid;
	else if(diff === "hard2")
		endNum = json.hard2AnswerGrid;
	return endNum;
}
