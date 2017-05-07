namespace StudiVZ {
    interface StudentData {
        matrikelnr : number;
        name : string;
        vorname : string;
        alter : number;
        geschlecht : boolean;
        kommentar : string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 (= weiblich) oder 1(= männlich)) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let array : string[] = _input.split(", ");
        if (array.length != 6) { return "Bitte geben Sie alle erforderlichen Informationen ein"; } // Alle Daten eingegeben?
        if (isNaN(parseInt(array[0]))) { return "Die Matrikelnummer muss als Zahl eingegeben werden"; } // Matrikelnr = Zahl?
        if (array[1].match(/^[a-zA-Z]+$/)) {} else { return "Der Name darf nur aus Buchstaben bestehen"; } // Name = Buchstaben?
        if (/^[a-zA-Z]+$/.test(array[2])) {} else { return "Der Vorname darf nur aus Buchstaben bestehen"; } // Vorname = Buchstaben?
        if (isNaN(parseInt(array[3]))) { return "Das Alter muss als Zahl eingegeben werden"; } // Alter = Zahl?
        if (parseInt(array[4]) != 0 && parseInt(array[4]) != 1) { return "Das Geschlecht muss mit '0' (weiblich) oder '1' (männlich) angegeben werden"; } // Geschlecht = 0 oder 1?
        for (let i : number = 0; i < students.length; i++) { // Matrikelnr bereits vorhanden?
            if (students[i].matrikelnr == parseInt(array[0])) {
                let geschlecht: string;
                if (students[i].geschlecht == true) {
                    geschlecht = "m";
                }
                else {
                    geschlecht = "w";
                }
                return "Für diese Matrikelnummer gibt es bereits einen Eintrag:\nMatrikelnr: " + students[i].matrikelnr + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar ;
            }
        }
        let s: StudentData = { // Schreibt die Daten in StudentData
            matrikelnr: parseInt(array[0]),
            name: array[1],
            vorname: array[2],
            alter: parseInt(array[3]),
            geschlecht: parseInt(array[4]) == 1,
            kommentar: array[5]
        };   
        students.push(s); // Fügt StudentData dem array students hinzu

        let geschlecht: string; // Wandelt 0 und 1 in das entsprechende Geschlecht um (für die Ausgabe)
        if (s.geschlecht == true) {
            geschlecht = "m";
        }
        else {
            geschlecht = "w";
        }
        return "Daten gespeichert\nMatrikelnr: " + s.matrikelnr + "\nName: " + s.name + "\nVorname: " + s.vorname + "\nAlter: " + s.alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + s.kommentar;
    }

    function queryData(_matrikel: number): string {
        for (let i : number = 0; i < students.length; i++) {
            if (students[i].matrikelnr == _matrikel) {
                let geschlecht: string;
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
}