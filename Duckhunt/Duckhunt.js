var duck = document.getElementById("duck");
var duckHunt = document.getElementById("duckHunt");
var miss = document.getElementById("miss")
var hit = document.getElementById("hit")
var HIT = 0;
var MISS = -1;
var flying = null;
miss.style.display = "none"
hit.style.display = "none"

var randomTop = [300, 375, 450];
var randomLeft = [450, 525, 600];
var posTop = randomTop[Math.floor(Math.random()*randomTop.length)];
var posLeft = randomLeft[Math.floor(Math.random()*randomLeft.length)];
duck.style.top = posTop + "px";
duck.style.left = posLeft + "px";

var compas = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]



duckHunt.addEventListener("click", function(){
	MISS++
	miss.innerHTML = "MISS: " + MISS;
	checkDone();
})
duck.addEventListener("click", function(event){
	event.stopPropagation();
	HIT++
	hit.innerHTML = "HIT: " + HIT;
	posTop = randomTop[Math.floor(Math.random()*randomTop.length)];
	posLeft = randomLeft[Math.floor(Math.random()*randomLeft.length)];
	duck.style.top = posTop + "px";
	duck.style.left = posLeft + "px";
	console.log(duck.style.top);
	checkDone();
})

function moveDuck(){

	HIT = 0;
	MISS = -1;

	miss.style.display = "inline";

	hit.style.display = "inline";

	miss.innerHTML = "MISS: " + MISS;

	hit.innerHTML = "HIT: " + HIT;

	var menu = document.getElementById("menu");

	duck.style.display = "inline";

	menu.style.display = "none";

	var speed = 500;

	flying = setInterval(fly, speed);

}

function fly(flyDir){

	flyDir=compas[Math.floor(Math.random()*compas.length)]
	
	if (flyDir=="N") {
		if (posTop<=0) {
			posTop = 450;
		}
		else {
			posTop-=75;
		}
	}
	else if (flyDir=="NE") {
		if (posTop<=0 || posLeft>=975) {
			posTop=450;
			posLeft=0;
		}
		else{
			posTop-=75;
			posLeft+=75;
		}	
		duck.style.transform = "scaleX(1)";
	}

	else if (flyDir=="E") {
		if (posLeft>=975) {
			posLeft=0;
		}
		else{
			posLeft+=75;
		}
		duck.style.transform = "scaleX(1)";
	}

	else if (flyDir=="SE") {
		if (posTop>=450 || posLeft>=975) {
			posTop=0;
			posLeft=0;
		}
		else{
			posTop+=75;
			posLeft+=75;
		}
		duck.style.transform = "scaleX(1)";
	}

	else if (flyDir=="S") {
		if (posTop>=450) {
			posTop=0;
		}
		else{
			posTop+=75;
		}
	}

	else if (flyDir=="SW") {
		if (posTop>=450 || posLeft<=0) {
			posTop=0;
			posLeft=975;
		}
		else{
			posTop+=75;
			posLeft-=75;
		}
		duck.style.transform = "scaleX(-1)";
	}

	else if (flyDir=="W") {
		if (posLeft<=0) {
			posLeft=975;
		}
		else{
			posLeft-=75;
		}
		duck.style.transform = "scaleX(-1)";
	}

	else if (flyDir=="NW") {
		if (posTop<=0 || posLeft<=0) {
			posTop=450;
			posLeft=975;
		}
		else{
			posTop-=75;
			posLeft-=75;
		}
		duck.style.transform = "scaleX(-1)";
	}
	duck.style.top = posTop + "px";
	duck.style.left = posLeft + "px";
}

function checkDone (){
	if (HIT+MISS==20) {
		duck.style.display = "none";
		hit.style.display = "none";
		miss.style.display = "none";
		menu.style.display = "block";
		document.getElementById("score").innerHTML="SCORE: " + HIT;
		posTop = randomTop[Math.floor(Math.random()*randomTop.length)];
		posLeft = randomLeft[Math.floor(Math.random()*randomLeft.length)];
		duck.style.top = posTop + "px";
		duck.style.left = posLeft + "px";
		clearInterval(flying);
	}
}
