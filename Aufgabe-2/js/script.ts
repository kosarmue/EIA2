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
	y = reihe*size;

	placeDiv(color, x, y, size, i);

	if(x==(7*size)) {
		reihe++
	}
}

writeKoerner();

function writeKoerner(): void {
	var feld = document.getElementsByClassName("felder");
	let koerner : number = 1;
	for (var j = 0; j < feld.length; j++) {
		if(j > 23) {
			koerner = koerner.toExponential(4)
		}
		feld[j].textContent = koerner;

		koerner *= 2;
	}
}




function placeDiv(_color: string, _x: number, _y: number, _size: number, _koerner: number): void {
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

});