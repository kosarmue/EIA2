var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
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
        var s = {
            matrikelnr: parseInt(array[0]),
            name: array[1],
            vorname: array[2],
            alter: parseInt(array[3]),
            geschlecht: parseInt(array[4]) == 1,
            kommentar: array[5]
        };
        students.push(s);
        var geschlecht;
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
            else { }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=script.js.map