/*
Aufgabe: Aufgabe 3b
Name: Kai Halfinger
Matrikel: 254872
Datum: 8. April 2017
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

document.addEventListener('DOMContentLoaded', function() {

let karten : string[] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz As", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik As"];
let handKarten : string[] = [];
let abgelegteKarten : string[] = [];

document.getElementById("nachziehstapel").addEventListener("click", function() {
	if(handKarten.length < 5 && karten.length > 0) {
		let kartennummer : number = Math.floor((Math.random() * 31) + 0); // Generiert 1 zufällige Zahl zwischen 0 und 31
		while(karten[kartennummer] == undefined) {	// Generiert 1 neue Zahl, wenn die Zahl bereits generiert wurde
			kartennummer = Math.floor((Math.random() * 31) + 0);
		}
		handKarten.push(karten[kartennummer]); // fügt die Karte dem Hand Array hinzu
		karten.splice(kartennummer, 1); // entfernt die gewählte Karte aus dem Kartenstapel Array

		let div: HTMLDivElement = document.createElement("div"); // Erstellt 1 Div zur Darstellung der Hand Karte
		document.getElementById("hand").appendChild(div);
		let s: CSSStyleDeclaration = div.style;
			div.className = "handkarten";
			div.textContent = handKarten[handKarten.length-1];
			// console.log(karten);
			// console.log("Hand " + handKarten);

			div.addEventListener("click", function() {
				for (let i = 0; i < handKarten.length; i++) { // Schleife guckt welche Position im Array der Inhalt der Handkarte hat
					if (this.textContent == handKarten[i]) {
						abgelegteKarten.push(handKarten[i]); // fügt die Karte dem Ablagestapel Array hinzu
						handKarten.splice(i, 1); // entfernte die geklickte Karte aus dem Array
						break;
					}
					else {}
				}
				// console.log("Neue Hand " + handKarten);
				// console.log("Ablage " + abgelegteKarten);
				document.getElementById("ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Oberste Karte: " + "\r\n" + abgelegteKarten[abgelegteKarten.length-1] + "\r\n" + "\r\n" + "Karten: " + abgelegteKarten.length.toString();
				document.getElementById("ablagestapel").style.display = "inline-block";
				this.parentNode.removeChild(this); // Entfernt das Div
			})

		// handKarten++;
		document.getElementById("nachziehstapel").textContent = "Kartenstapel" + "\r\n" + "Karten: " + karten.length.toString();
	}
	else {};	
});

});