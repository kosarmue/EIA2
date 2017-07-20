var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var canvas;
    canvas = document.getElementsByTagName("canvas")[0];
    // Klasse für Spielerobjekt
    var Player = (function () {
        function Player(_width, _height) {
            this.width = 30;
            this.height = 30;
            this.x = _width / 2 - (this.width / 2);
            this.y = _height / 2 - (this.height / 2);
            this.speed = 8;
            this.draw();
        }
        Player.prototype.draw = function () {
            crc2.fillStyle = "#fff";
            crc2.fillRect(this.x, this.y, this.width, this.height);
        };
        Player.prototype.crashWith = function (_obj) {
            var crash = true;
            if (this.y + this.height < _obj.y || this.y > _obj.y + _obj.height || this.x + this.width < _obj.x || this.x > _obj.x + _obj.width) {
                crash = false;
            }
            return crash;
        };
        Player.prototype.crashWithGhost = function (_obj) {
            var crash = true;
            if (this.y + 50 + this.height < _obj.y || this.y - 50 > _obj.y + _obj.height || this.x + 50 + this.width < _obj.x || this.x - 50 > _obj.x + _obj.width) {
                crash = false;
            }
            return crash;
        };
        return Player;
    }());
    // Klasse für Obstacles
    var Obstacle = (function () {
        function Obstacle(_width, _height) {
            do {
                this.width = Math.round(Math.random() * 100 + 30);
                this.height = Math.round(Math.random() * 100 + 30);
                this.x = Math.round(Math.random() * (_width - this.width));
                this.y = Math.round(Math.random() * (_height - this.height));
            } while (playerrect.crashWithGhost(this));
            this.speed = Math.round(Math.random() + 1);
            this.direction = Math.round(Math.random());
            this.switchDirection = Math.round(Math.random());
            this.draw();
        }
        Obstacle.prototype.update = function (_width, _height) {
            this.move(_width, _height);
            this.draw();
        };
        Obstacle.prototype.move = function (_width, _height) {
            if (this.direction == 0) {
                if (this.x >= _width - this.width) {
                    this.switchDirection = 0;
                }
                if (this.x <= 0) {
                    this.switchDirection = 1;
                }
                if (this.switchDirection == 1) {
                    this.x += this.speed;
                }
                else if (this.switchDirection == 0) {
                    this.x -= this.speed;
                }
            }
            if (this.direction == 1) {
                if (this.y >= _height - this.height) {
                    this.switchDirection = 0;
                }
                if (this.y <= 0) {
                    this.switchDirection = 1;
                }
                if (this.switchDirection == 1) {
                    this.y += this.speed;
                }
                if (this.switchDirection == 0) {
                    this.y -= this.speed;
                }
            }
        };
        Obstacle.prototype.draw = function () {
            crc2.fillStyle = "#555";
            crc2.fillRect(this.x, this.y, this.width, this.height);
        };
        return Obstacle;
    }());
    // Klasse für Bonuspunktobjekte
    var Bonus = (function () {
        function Bonus(_width, _height) {
            this.width = 12;
            this.height = 12;
            this.x = Math.round(Math.random() * (_width - this.width));
            this.y = Math.round(Math.random() * (_height - this.height));
            this.draw();
        }
        Bonus.prototype.draw = function () {
            crc2.fillStyle = "#39D530";
            crc2.fillRect(this.x, this.y, this.width, this.height);
        };
        Bonus.prototype.collected = function (_obj) {
            var collected = true;
            if (this.y + this.height < _obj.y || this.y > _obj.y + _obj.height || this.x + this.width < _obj.x || this.x > _obj.x + _obj.width) {
                collected = false;
            }
            return collected;
        };
        return Bonus;
    }());
    window.addEventListener("load", init);
    var crc2;
    var playerrect;
    var obstacles = [];
    var bonuspoints = [];
    var gameduration = 0;
    var score = 0;
    // Funktion zum Erstellen des Spiels
    function init(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#000"; // Zeichnet schwarzen Hintergrund
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        playerrect = new Player(canvas.width, canvas.height); // Erstellt Spieler
        for (var i = 0; i < 8; i++) {
            obstacles.push(new Obstacle(canvas.width, canvas.height));
        }
        document.addEventListener("keydown", keypress, false);
        window.setTimeout(animate, 20, canvas.width, canvas.height);
    }
    // Verarbeiten von Tastendrückern
    function keypress(_event) {
        switch (_event.keyCode) {
            case 38:
                if (playerrect.y < 7) {
                    playerrect.y = 0;
                } // Wenn der Spieler weniger als einen Tastendruck vom Rand weg ist, bewegt er sich zum Rand (und nicht darüber hinaus)
                else {
                    playerrect.y -= playerrect.speed;
                }
                break;
            case 40:
                if (playerrect.y + playerrect.height > 750 - 7) {
                    playerrect.y = 750 - playerrect.height;
                }
                else {
                    playerrect.y += playerrect.speed;
                }
                break;
            case 37:
                if (playerrect.x < 7) {
                    playerrect.x = 0;
                }
                else {
                    playerrect.x -= playerrect.speed;
                }
                break;
            case 39:
                if (playerrect.x + playerrect.width > 750 - 7) {
                    playerrect.x = 750 - playerrect.width;
                }
                else {
                    playerrect.x += playerrect.speed;
                }
                break;
            default:
                break;
        }
    }
    function manageBonusPoints(_width, _height) {
        if ((gameduration % 2000 == 0) && (Math.random() < 0.3) && (bonuspoints.length < 10)) {
            bonuspoints.push(new Bonus(_width, _height));
        }
        for (var i = 0; i < bonuspoints.length; i++) {
            bonuspoints[i].draw();
        }
        for (var i = 0; i < bonuspoints.length; i++) {
            if (bonuspoints[i].collected(playerrect)) {
                score += 15;
                bonuspoints.splice(i, 1);
            }
        }
    }
    function manageObstacle(_width, _height) {
        if ((gameduration % 2000 == 0) && (Math.random() < 0.3)) {
            obstacles.push(new Obstacle(_width, _height));
            if ((Math.random() < 0.5) || (obstacles.length > 16)) {
                deleteObstacle(Math.round(Math.random() * (obstacles.length - 1)));
            }
        }
    }
    function deleteObstacle(_position) {
        obstacles.splice(_position, 1);
    }
    // Funktion, die jeden Frame zeichnet
    function animate(_width, _height) {
        crc2.fillStyle = "#000"; // Zeichnet Hintergrund
        crc2.fillRect(0, 0, _width, _height);
        playerrect.draw(); // Zeichnet Spieler
        gameduration += 20; // Zählt Zeit mit
        manageObstacle(_width, _height); // Fügt Obstacles hinzu oder entfernt welche
        manageBonusPoints(_width, _height); // Fügt Bonuspunkte Hinzu oder entfernt welche
        if (gameduration % 1000 == 0) {
            score++;
        }
        document.getElementById("score").textContent = "Your score: " + score.toString(); // Gibt aktuellen Score aus
        for (var i = 0; i < obstacles.length; i++) {
            obstacles[i].update(_width, _height);
        }
        window.setTimeout(animate, 20, _width, _height); // lädt nächsten Frame
        // Soll checken ob das playerrectangle ein Obstacle berührt. Falls ja, soll kein neuer Frame geladen werden und das Spiel stehen bleiben. Falls nein, soll der nächste Frame geladen werden.
        // for (let i = 0; i < obstacles.length; i++) {
        //           if (playerrect.crashWith(obstacles[i])) {
        //               // ENDE          
        //           }
        //           else {
        //           	window.setTimeout(animate, 20, _width, _height);
        //           }
        //       }     
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=script.js.map