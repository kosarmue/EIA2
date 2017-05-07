var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 (= weiblich) oder 1(= männlich)) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var array = _input.split(", ");
        if (array.length != 6) {
            return "Bitte geben Sie alle erforderlichen Informationen ein";
        } // Alle Daten eingegeben?
        if (isNaN(parseInt(array[0]))) {
            return "Die Matrikelnummer muss als Zahl eingegeben werden";
        } // Matrikelnr = Zahl?
        if (array[1].match(/^[a-zA-Z]+$/)) { }
        else {
            return "Der Name darf nur aus Buchstaben bestehen";
        } // Name = Buchstaben?
        if (/^[a-zA-Z]+$/.test(array[2])) { }
        else {
            return "Der Vorname darf nur aus Buchstaben bestehen";
        } // Vorname = Buchstaben?
        if (isNaN(parseInt(array[3]))) {
            return "Das Alter muss als Zahl eingegeben werden";
        } // Alter = Zahl?
        if (parseInt(array[4]) != 0 && parseInt(array[4]) != 1) {
            return "Das Geschlecht muss mit '0' (weiblich) oder '1' (männlich) angegeben werden";
        } // Geschlecht = 0 oder 1?
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikelnr == parseInt(array[0])) {
                var geschlecht_1 = void 0;
                if (students[i].geschlecht == true) {
                    geschlecht_1 = "m";
                }
                else {
                    geschlecht_1 = "w";
                }
                return "Für diese Matrikelnummer gibt es bereits einen Eintrag:\nMatrikelnr: " + students[i].matrikelnr + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht_1 + "\nKommentar: " + students[i].kommentar;
            }
        }
        var s = {
            matrikelnr: parseInt(array[0]),
            name: array[1],
            vorname: array[2],
            alter: parseInt(array[3]),
            geschlecht: parseInt(array[4]) == 1,
            kommentar: array[5]
        };
        students.push(s); // Fügt StudentData dem array students hinzu
        var geschlecht; // Wandelt 0 und 1 in das entsprechende Geschlecht um (für die Ausgabe)
        if (s.geschlecht == true) {
            geschlecht = "m";
        }
        else {
            geschlecht = "w";
        }
        return "Daten gespeichert\nMatrikelnr: " + s.matrikelnr + "\nName: " + s.name + "\nVorname: " + s.vorname + "\nAlter: " + s.alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + s.kommentar;
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikelnr == _matrikel) {
                var geschlecht = void 0;
                if (students[i].geschlecht == true) {
                    geschlecht = "m";
                }
                else {
                    geschlecht = "w";
                }
                return "Matrikelnr: " + students[i].matrikelnr + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }
        }
        return "Für diese Matrikelnummer gibt es keinen Eintrag";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=script.js.map