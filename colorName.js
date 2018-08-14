var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message")


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to square
	squares[i].addEventListener("click", function()
	{
		//grab picked square and compare to picked color

		var clickedColor = this.style.background;

		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "correct";
			changeColor(pickedColor);
		}
		else
		{
			this.style.background = "white";
			messageDisplay.textContent = "try again";
		}
	});

	function changeColor(color){
		for(var i = 0; i < squares.length; i++){
			squares[i].style.background = color;
		}
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}