/*
Aufgabe: Aufgabe 3b
Name: Kai Halfinger
Matrikel: 254872
Datum: 5. April 2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function () {
    var karten = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz As", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik As"];
    var gezogeneKarten = 0;
    var abgelegteKarten = 0;
    var uebrigeKarten = karten.length - gezogeneKarten;
    document.getElementById("nachziehstapel").addEventListener("click", function () {
        if (gezogeneKarten < 5 && uebrigeKarten > 0) {
            var kartennummer = Math.floor((Math.random() * 31) + 0); // Generiert 1 zufällige Zahl zwischen 0 und 31
            while (karten[kartennummer] == undefined) {
                kartennummer = Math.floor((Math.random() * 31) + 0);
            }
            var kartenwert = karten[kartennummer]; // "Nimmt" 1 Karte aus dem Array
            karten.splice(kartennummer, 1); // entfernt die gezogene Karte aus dem Array
            var div = document.createElement("div"); // Erstellt 1 Div zur Darstellung der gezogenen Karte
            document.getElementById("hand").appendChild(div);
            var s = div.style;
            div.className = "handkarten";
            div.textContent = kartenwert;
            div.addEventListener("click", function () {
                gezogeneKarten--;
                abgelegteKarten++;
                document.getElementById("ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Karten: " + abgelegteKarten.toString();
                document.getElementById("ablagestapel").style.display = "inline-block";
                this.parentNode.removeChild(this); // Entfernt das Div
            });
            gezogeneKarten++;
            uebrigeKarten = 32 - gezogeneKarten - abgelegteKarten;
            document.getElementById("nachziehstapel").textContent = "Kartenstapel" + "\r\n" + "Karten: " + uebrigeKarten.toString();
        }
        else { }
        ;
    });
});
//# sourceMappingURL=script.js.map