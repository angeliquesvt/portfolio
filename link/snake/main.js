window.addEventListener("load",run ,false) ;
function run(){
	drawScreen("bord");

	drawLevel(level1);
	
	initSnake(10, 10);
	document.addEventListener("keydown",drive ,false) ;
	
	//add()
	
	document.getElementById("reset").addEventListener("click",reset ,false) ;
	document.getElementById("start").addEventListener("click",start ,false) ;
	//document.getElementById("stop").addEventListener("click",stop ,false) ;

}

	