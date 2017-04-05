/*
Aufgabe: Aufgabe 3a
Name: Kai Halfinger
Matrikel: 254872
Datum: 5. April 2017
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

document.addEventListener('DOMContentLoaded', function() {
let n : number = 64;
let size : number = 120;
let reihe : number = 1;
let color : string;


for (var i : number = 0; i < n ; i++) {
	if (reihe%2!=0) {
		if(i%2==0) {
			color = "black";
		}
		else {
			color = "white";
		}
	}
	else {
		if(i%2==0) {
			color = "white";
		}
		else {
			color = "black";
		}
	}
	x = (i%8)*size;
	y = (reihe-1)*size;

	placeDiv(color, x, y, size, i);

	if(x==(7*size)) {
		reihe++
	}
}
writeKoerner();


function writeKoerner(): void {
	var feld = document.getElementsByClassName("felder");
	let koerner : any;
	for (var j = 0; j < feld.length; j++) {
		koerner = Math.pow(2,j);
		if(j > 23) {
			koerner = koerner.toExponential(5)
		}
		feld[j].textContent = koerner.toString();
	}
}


function placeDiv(_color: string, _x: number, _y: number, _size: number, _counter: number): void {
    let div: HTMLDivElement = document.createElement("div");
    document.body.appendChild(div);

    let s: CSSStyleDeclaration = div.style;
    s.position = "absolute";
    s.display = "inline-block";
    div.className += _color;
    div.className += " felder";
    s.width = _size + "px";
    s.height = _size + "px";
    s.left = _x + "px";
    s.top = _y + "px";
}


let divList : NodeListOf<HTMLElement> = document.getElementsByTagName("div");
for (let i = 0; i < 9; i++) {	/* Gibt den Feldern in der ersten Reihe bei einem Klick die Klasse "selected", wodurch sie rot werden */
	divList[i].addEventListener("click", function() {
    	this.classList.toggle("selected");
    	showSummeKoerner();
	});
}

function showSummeKoerner():void {
	let selectedDivs : NodeListOf<Element> = document.getElementsByClassName("selected");
	let summeKoerner : number = 0;

	if (selectedDivs.length == 0){	/* Zeigt die Tooltip Box nur an, wenn Felder selektiert sind */
		document.getElementById("tooltip").style.display = "none";
	}
	else {
		document.getElementById("tooltip").style.display = "inline-block";
	}

	for (let i = 0; i < selectedDivs.length; i++) {	 /* Schreibt die Summe der Körner auf den selektierten Feldern in die Tooltip Box */
		summeKoerner += Number(selectedDivs[i].textContent);
		document.getElementById("tooltip").textContent = "Summe der selektierten Reiskörner:" + "\r\n" + "Dezimal: " + summeKoerner.toString() + "\r\n" + "Hexadezimal: " + summeKoerner.toString(16);
	}
}


});

document.addEventListener("mousemove", function(Event) { /* Sorgt dafür, dass die Tooltip Box die Maus verfolgt */
	document.getElementById("tooltip").style.left = (Event.clientX+10) + "px";
	document.getElementById("tooltip").style.top = (Event.clientY+10) + "px";
});