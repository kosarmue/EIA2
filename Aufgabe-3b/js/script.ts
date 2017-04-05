/*
Aufgabe: Aufgabe 3b
Name: Kai Halfinger
Matrikel: 254872
Datum: 5. April 2017
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

document.addEventListener('DOMContentLoaded', function() {

let karten : string[] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz As", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik As"];
let gezogeneKarten : number = 0;
let abgelegteKarten : number = 0;
let uebrigeKarten : number = karten.length - gezogeneKarten;

document.getElementById("nachziehstapel").addEventListener("click", function() {
	if(gezogeneKarten<5) {
		if(uebrigeKarten > 0) {
			let kartennummer : number = Math.floor((Math.random() * 31) + 0); // Generiert 1 zufällige Zahl zwischen 0 und 31
			while(karten[kartennummer] == undefined) {	// Generiert 1 neue Zahl, wenn die Zahl bereits generiert wurde
				console.log("bereits gezogen");
				kartennummer = Math.floor((Math.random() * 31) + 0);
			}
			let kartenwert : string = karten[kartennummer];
			karten.splice(kartennummer, 1);

			let div: HTMLDivElement = document.createElement("div");
    		document.getElementById("hand").appendChild(div);
    		let s: CSSStyleDeclaration = div.style;
   			div.className = "handkarten";
    		div.textContent = kartenwert;
    		div.addEventListener("click", function() {
    			gezogeneKarten--;
    			abgelegteKarten++;
    			document.getElementById("ablagestapel").textContent = abgelegteKarten.toString();
    			this.parentNode.removeChild(this);
    		})
			gezogeneKarten++;
			uebrigeKarten = 32 - gezogeneKarten - abgelegteKarten;
			document.getElementById("nachziehstapel").textContent = uebrigeKarten.toString();
			// document.getElementById("hand").textContent = gezogeneKarten.toString();
		}
		else {console.log("Alles gezogen")};
	}
	else {};	
});

});