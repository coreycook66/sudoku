//this function will generate the game board
function genGrid() {

	var strHtml = "";
	var offset=0;
	strHtml += "<table class = 'sudoku'>";
	//three colgroups to make bold 3x3 lines in css
	strHtml += "<colgroup>";
	for(var i = 0; i < 3; i++) {
		strHtml += "<col>";
	}
	strHtml += "</colgroup>";
	strHtml += "<colgroup>";
	for(var i = 0; i < 3; i++) {
		strHtml += "<col>";
	}
	strHtml += "</colgroup>";
		strHtml += "<colgroup>";
	for(var i = 0; i < 3; i++) {
		strHtml += "<col>";
	}
	strHtml += "</colgroup>";
	//iterate through three times for three rows
	strHtml += "<tbody id='tb0'>"
	for(var i = 0; i < 3; i++) {
		strHtml += "<tr>";
		//iterate through to add 9 table data in each row
		for(var j = 0; j < 9; j++)
		{
			//at each td call getNum in model.
			strHtml += "<td id=\'" + i + "_" + j + "\'>"+getNum(i,j)+"</td>";
		}
	}
	offset+=3;//add three to offset so the rows can be incremented correctly
	//-----------
	//do the same thing two more times to get a 9x9 square
	strHtml += "</tbody>";
	strHtml += "<tbody id='tb1'>";
		for(var i = offset; i < 3+offset; i++) {
			strHtml += "<tr>";
		for(var j = 0; j < 9; j++)
		{
			strHtml += "<td id=\'" + i + "_" + j + "\'>"+getNum(i,j)+"</td>";
		}
	}
	offset+=3;
	strHtml += "</tbody>";
	strHtml += "<tbody id='tb2'>";

		for(var i = offset; i < 3+offset; i++) {
			strHtml += "<tr>";
		for(var j = 0; j < 9; j++)
		{
			strHtml += "<td id=\'" + i + "_" + j + "\'>"+getNum(i,j)+"</td>";
		}
	}
	strHtml += "</tbody>";
	
	
	return strHtml;//return the string that everything is attached to
}
function drawBoard() {
	//generate game board
	document.getElementById("gameboard").innerHTML=genGrid();
	//call event handler function after board is generated
	addEventHandler();
}

var emptyCell=0;
function addEventHandler() {
	//get all td elements on the board
	var cells = document.getElementsByTagName("td");
	//iterate through to get specific location in col and row
	for(var i = 0; i < cells.length; i++) {
		let col = cells[i].cellIndex;
		let row = cells[i].parentNode.rowIndex;
		cells[i].backgroundColor = "grey";
		cells[i].onclick = function() {
			document.getElementById("col").innerHTML = col + 1;
			document.getElementById("row").innerHTML = row + 1;
		}
		
		if(cells[i].innerHTML != '') {
			cells[i].setAttribute("style", "background-color:grey");
		}
		//check to see if empty cell.  if empty add event handler for empty td
		if(cells[i].innerHTML === '') {
			//add onblur to input element
			cells[i].innerHTML = "<input onblur='checkWinCondition()' type='text' id='editable' maxlength=1></input>";
			emptyCell++;
			//this will be called if number is added or deleted or letter
			cells[i].oninput = function() {
				var answer = compare(row,col);
				if(this.childNodes[0].value == answer) {
					currentGrid[row][col] = parseInt(this.childNodes[0].value);
					this.childNodes[0].setAttribute("style", "background-color:green");
				} else {
					currentGrid[row][col] = parseInt(this.childNodes[0].value);
					this.childNodes[0].setAttribute("style", "background-color:red");
				}
			}
		}
	}
}

function checkWinCondition() {
	var cells = document.getElementsByTagName("td");

	if (currentGrid.toString() == endNum.toString()) {
		stopTimer();
		var min = parseInt(time/60);
		var sec = checkTimer(parseInt(time %60));
		alert("COMPLETE! TIME FINISHED: "+ min + ":" + sec);
	}
	
}

function drawCanvas() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.font = "100px Times";
	ctx.fillText("Sudoku",50,100);
}
