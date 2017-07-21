namespace Abschlussaufgabe {
	let canvas: HTMLCanvasElement;
	canvas = document.getElementsByTagName("canvas")[0];

// Klasse für Spielerobjekt
	class Player {
		width : number;
		height : number;
		x : number;
		y : number;
		speed : number;

		constructor(_width : number, _height : number) {
			this.width = 30;
			this.height = 30;
			this.x = _width/2-(this.width/2);
			this.y = _height/2-(this.height/2);
			this.speed = 8;
			this.draw();
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {

			for (let i = 0; i < keys.length; i++) {
				if (keys[i] == 38) { // up
					if (playerrect.y < 7) {playerrect.y = 0;} // Wenn der Spieler weniger als einen Tastendruck vom Rand weg ist, bewegt er sich zum Rand (und nicht darüber hinaus)
					else {playerrect.y -= playerrect.speed;}
				}

				if (keys[i] == 40) { // down
					if (playerrect.y+playerrect.height > 750-7) {playerrect.y = 750-playerrect.height;}
					else {playerrect.y += playerrect.speed;}
				}

				if (keys[i] == 37) { // left
					if (playerrect.x < 7) {playerrect.x = 0;}
					else {playerrect.x -= playerrect.speed;}
				}

				if (keys[i] == 39) { // right
					if (playerrect.x+playerrect.width > 750-7) {playerrect.x = 750-playerrect.width;}
					else {playerrect.x += playerrect.speed;}
				}
			}
		}

		draw(): void {
			crc2.fillStyle = "#fff";
			crc2.fillRect(this.x, this.y, this.width, this.height);
		}

		crashWith(_obj): boolean {
			let crash = true;
			if (this.y+this.height < _obj.y || this.y > _obj.y+_obj.height || this.x+this.width < _obj.x || this.x > _obj.x+_obj.width) {
				crash = false;
			}
			return crash;
		}

		crashWithGhost(_obj): boolean {
			let crash = true;
			if (this.y+50+this.height < _obj.y || this.y-50 > _obj.y+_obj.height || this.x+50+this.width < _obj.x || this.x-50 > _obj.x+_obj.width) {
				crash = false;
			}
			return crash;
		}

	}


// Klasse für Obstacles
	class Obstacle {
		width : number;
		height : number;
		x : number;
		y : number;
		speed : number;
		direction : number;
		switchDirection : number;


		constructor(_width : number, _height : number) {			
			do {
			this.width = Math.round(Math.random()*100+30);
			this.height = Math.round(Math.random()*100+30);
			this.x = Math.round(Math.random()*(_width-this.width));
			this.y = Math.round(Math.random()*(_height-this.height));
			}
			while(playerrect.crashWithGhost(this));
			this.speed = Math.round(Math.random()+1);
			this.direction = Math.round(Math.random());
			this.switchDirection = Math.round(Math.random());

			this.draw();
		}

		update(_width : number, _height : number):void {
			this.move(_width, _height);
			this.draw();
		}

		move(_width : number, _height : number): void {

			if (this.direction==0) {
                if (this.x >= _width - this.width ) {this.switchDirection = 0;}
                if (this.x <= 0) {this.switchDirection = 1;}
                if (this.switchDirection == 1) { this.x += this.speed;}
                else if (this.switchDirection == 0) { this.x -= this.speed;}
            }
            if (this.direction==1) {
                if (this.y >= _height - this.height ) {this.switchDirection = 0;}
                if (this.y <= 0) {this.switchDirection = 1;}
                if (this.switchDirection == 1) { this.y += this.speed;}
                if (this.switchDirection == 0) { this.y -= this.speed;}
            }
		}

		draw(): void {
			crc2.fillStyle = "#555";
			crc2.fillRect(this.x, this.y, this.width, this.height);
		}

	}

// Klasse für Bonuspunktobjekte
	class Bonus {
		width : number;
		height : number;
		x : number;
		y : number;

		constructor(_width : number, _height : number) {
			this.width = 12;
			this.height = 12;
			this.x = Math.round(Math.random()*(_width-this.width));
			this.y = Math.round(Math.random()*(_height-this.height));

			this.draw();
		}

		draw(): void {
			crc2.fillStyle = "#39D530";
			crc2.fillRect(this.x, this.y, this.width, this.height);
		}

		collected(_obj): boolean {
			let collected = true;
			if (this.y+this.height < _obj.y || this.y > _obj.y+_obj.height || this.x+this.width < _obj.x || this.x > _obj.x+_obj.width) {
				collected = false;
			}
			return collected;
		}
	}

	window.addEventListener("load", init);
	let crc2: CanvasRenderingContext2D;

	let playerrect : Player;
	let obstacles : Obstacle[] = [];
	let bonuspoints : Bonus[] = [];
	let gameduration : number = 0;
	let score : number = 0;
	let keys : number [] = [];
	let gameState : boolean = true;

// Funktion zum Erstellen des Spiels
	function init(_event: Event): void {
		let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
		crc2 = canvas.getContext("2d");

		crc2.fillStyle = "#000"; // Zeichnet schwarzen Hintergrund
		crc2.fillRect(0, 0, canvas.width, canvas.height);

		playerrect = new Player(canvas.width, canvas.height); // Erstellt Spieler

		for (let i = 0; i < 8; i++) { // Erzeugt 8 Obstacles
			obstacles.push(new Obstacle(canvas.width, canvas.height));
		}

		document.addEventListener("keydown", keypress, false);
		window.setTimeout(animate, 20, canvas.width, canvas.height);
	}

// Verarbeiten von Tastendrückern
	function keypress(_event : KeyboardEvent): void {
		if (_event.keyCode == 38) { // up
			keys.push(38)
		}

		if (_event.keyCode == 40) { // down
			keys.push(40)
		}

		if (_event.keyCode == 37) { // left
			keys.push(37)
		}

		if (_event.keyCode == 39) { // right
			keys.push(39)
		}




		
	}

	function manageBonusPoints(_width: number, _height: number): void{
        if((gameduration % 2000 == 0)&&(Math.random()<0.3)&&(bonuspoints.length<10)){
            bonuspoints.push(new Bonus(_width,_height));          
        }
        for (let i = 0; i < bonuspoints.length; i++) {
            bonuspoints[i].draw();
        }
        for (let i = 0; i < bonuspoints.length; i++) {
            if(bonuspoints[i].collected(playerrect)){
                score += 20;
                bonuspoints.splice(i,1);
            }
        }
    }

	function manageObstacle(_width: number, _height: number): void {
        if ((gameduration % 2000 == 0)&&(Math.random()<0.3)) {
            obstacles.push(new Obstacle(_width, _height));
            if((Math.random()<0.5)||(obstacles.length>20)){
                deleteObstacle(Math.round(Math.random()*(obstacles.length-1)));
            }
        }
    }

	function deleteObstacle(_position): void {
        obstacles.splice(_position,1);
    }

// Funktion, die jeden Frame zeichnet
	function animate(_width: number, _height: number): void {
		if (gameState == true) {
			crc2.fillStyle = "#000"; // Zeichnet Hintergrund
			crc2.fillRect(0, 0, _width, _height);

			playerrect.update(); // Zeichnet Spieler

			gameduration += 20; // Zählt Zeit mit

			manageObstacle(_width, _height); // Fügt Obstacles hinzu oder entfernt welche
			manageBonusPoints(_width, _height); // Fügt Bonuspunkte Hinzu oder entfernt welche

			if (gameduration%1000==0) { // Erhöht den Score jede Sekunde um 1
				score++;
			}
			document.getElementById("score").textContent = "Your score: " + score.toString(); // Gibt aktuellen Score aus



			for (let i = 0; i < obstacles.length; i++) { // Bewegt Obstacles und zeichnet sie neu
				obstacles[i].update(_width, _height);
			}

			keys = [];

			// Soll checken ob das playerrectangle ein Obstacle berührt. Falls ja, soll kein neuer Frame geladen werden und das Spiel stehen bleiben. Falls nein, soll der nächste Frame geladen werden.

			   

			window.setTimeout(animate, 20, _width, _height); // lädt nächsten Frame

			for (let i = 0; i < obstacles.length; i++) {
	            if (playerrect.crashWith(obstacles[i])) {
	            	gameState = false;
	            }
	        }
		}
		
		else {
			if(!alert('GAME OVER! Your score: ' + score)){window.location.reload();}
		} 

	}
}