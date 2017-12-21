//variables globales//
var size=50;
var colors= ["white", "black", "red", "green", "blue"];
var snake;
var dx, dy;
var stDep;
var stGrow;
var score=0;

//fonction qui crée le taleur, l'id prend l'id de la div bord//
function drawScreen(id) {
	var table = document.createElement("table");
	var tr ,td ;
	var lig ,col ;
	for (lig=0 ;lig <size ;lig ++) {
		tr = document.createElement("tr");
		for (col=0 ;col <size ;col ++){
			td = document.createElement("td");
			td.setAttribute("id","c"+col+"."+lig);
			tr.appendChild(td) ;
		}
		table.appendChild(tr) ;
	}
	document.getElementById(id).appendChild(table);
}

//fonction qui attribue couleurs//
function plot (x,y,val){
	document.getElementById("c"+x+"."+y).style.backgroundColor = colors[val];   //on prend l'id cx.y et on lui attribue la valeur du tableau colors, val = indice couleur//
    document.getElementById("c"+x+"."+y).value = val; //On dit que la valeur de cette case est val, c'est pour ça qu'on peut la retourner avec la fonction get//
}

//fonction qui affiche valeur attribuée aux cases (=valeur de la couleur//
 function get (x, y) {
    var laCase = document.getElementById("c"+x+"."+y);
    return (laCase.value);
 }
 
 //fonction qui déssine le niveau
function drawLevel(level){
	for (var i = 0; i<size; i++) {
		for (var j = 0; j<size; j++) {
			plot(j,i ,parseInt(level[i][j])); //valeur de level de i j//
		}
	}
}

//fonction qui initialise le serpent//
function initSnake(x,y){
	snake=[[x,y]];
	plot (x, y, 2);
	dx=0;
	dy=1;
}

//disparition de la queue du serpent
function shift(x,y){
	var tail = snake.pop();
	plot(x,y, 2);
	plot(tail[0],tail[1], 0);
	snake.unshift([x,y]);	
}


function move() {
 var nx = snake [0][0] + dx ;
 var ny = snake [0][1] + dy ;
 var value = get(nx ,ny) ;
 switch(value) {
	case 0 :
		shift(nx,ny);
		break;
	case 1 : 
		death("mur") ;
		break ;
	case 2 : 
		death("snake") ;
		break ;
	case 3:
		shift(nx,ny);
		add();
		score++;
		break;
	default :
		death(" ?") ;
 }
}

//fonction stop si perdu//
function death(dead){
	console.log(dead);
	clearInterval(stDep);
	clearInterval(stGrow);
	alert("Votre score est de "+score+ "!") ;
}

//Diriger le serpent//
function drive(evt){
	console.log(evt.key);
	switch (evt.key){
		case "ArrowUp":
			dx = 0 
			dy = -1
			break;
		case "ArrowDown":
			dx = 0 
			dy = 1
			break;	
		case "ArrowRight":
			dx = 1 
			dy = 0
			break;
		case "ArrowLeft":
			dx = -1 
			dy = 0
			break;
	}
}

//Fait grossir le serpent//
function add(){
snake.push(snake[snake.length-1]);
score++;
}

function start(){
	stDep = setInterval(move ,100);
	stGrow = setInterval(add, 200);
	console.log('start');
	document.getElementById("stop").addEventListener("click",stop ,false) ;
	document.getElementById("start").removeEventListener("click",start);
}
function stop(){
	clearInterval(stDep);
	clearInterval(stGrow);
	document.getElementById("start").removeEventListener("click",stop);
	document.getElementById("start").addEventListener("click",start ,false) ;
}

function reset(){
	drawLevel(level1);
	initSnake(10, 10);
}
