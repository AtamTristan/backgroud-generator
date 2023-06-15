var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor(){
	// Generate a random integer between 1 and 255
	const randomNumber = Math.ceil(Math.random() * 16777216) -1;
	let randomHex = randomNumber.toString(16);
	while(randomHex.length < 6){
		randomHex = "0".concat("", randomHex);
	}
	randomHex = "#".concat("", randomHex);

	return randomHex;
} 

function randomColors(){
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColors);

setGradient();



