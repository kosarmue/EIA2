namespace Abschlussaufgabe {
	let canvas: HTMLCanvasElement;
	canvas = document.getElementsByTagName("canvas")[0];

	class Player {
		width : number;
		height : number;
		x : number;
		y : number;

		constructor(_width : number, _height : number) {
			this.width = 30;
			this.height = 30;
			this.x = _width/2-(this.width/2);
			this.y = _height/2-(this.height/2);
			this.draw();
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

		// crashWithGhost(_obj): boolean {
		// 	let crash = true;
		// 	if (this.y+35+this.height < _obj.y || this.y-35 > _obj.y+_obj.height || this.x+35+this.width < _obj.x || this.x-35 > _obj.x+_obj.width) {
		// 		crash = false;
		// 	}
		// 	return crash;
		// }

	}

	class Obstacle {
		width : number;
		height : number;
		x : number;
		y : number;
		speed : number;
		direction : number;
		switchDirection : number;


		constructor(_width : number, _height : number) {			
			// do {
			this.width = Math.round(Math.random()*100+30);
			this.height = Math.round(Math.random()*100+30);
			this.x = Math.round(Math.random()*(_width-this.width));
			this.y = Math.round(Math.random()*(_height-this.height))
			// }
			// while(playerrect.crashWithGhost(obstacles[obstacles.length-1]));
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

	// class bonus {
	// 	x : number;
	// 	y : number;

	// }

	// class points extends bonus {

	// }

	// class speed extends bonus {

	// }

	window.addEventListener("load", init);
	let crc2: CanvasRenderingContext2D;

	let playerrect : Player;
	let obstacles : Obstacle[] = [];
	// let speedbonus : speed[] = [];
	// let pointbonus : points[] = [];
	let gameduration : number = 0;
	let score : number = 0;

	function init(_event: Event): void {
		let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
		crc2 = canvas.getContext("2d");

		crc2.fillStyle = "#000";
		crc2.fillRect(0, 0, canvas.width, canvas.height);

		playerrect = new Player(canvas.width, canvas.height);

		for (let i = 0; i < 8; i++) {
			obstacles.push(new Obstacle(canvas.width, canvas.height));
		}

		document.addEventListener("keydown", keypress, false);
		window.setTimeout(animate, 20, canvas.width, canvas.height);
	}

	function keypress(_event : KeyboardEvent): void {
		switch (_event.keyCode) {
			case 38: // up
				if (playerrect.y < 7) {playerrect.y = 0;}
				else {playerrect.y -= 6;}
			 	console.log("up");
			 	break;
			case 40: // down
				if (playerrect.y+playerrect.height > 750-7) {playerrect.y = 750-playerrect.height;}
				else {playerrect.y += 6;}
			 	console.log("down");
			 	break;
			case 37: // left
				if (playerrect.x < 7) {playerrect.x = 0;}
				else {playerrect.x -= 6;}
			 	console.log("left");
			 	break;
			case 39: // right
				if (playerrect.x+playerrect.width > 750-7) {playerrect.x = 750-playerrect.width;}
				else {playerrect.x += 6;}
			 	console.log("right");
			 	break;
			default: 
				break;
		}
	}

	function deleteObstacle(_position): void {
        obstacles.splice(_position,1);
    }

	function animate(_width: number, _height: number): void {
		crc2.fillStyle = "#000";
		crc2.fillRect(0, 0, _width, _height);

		playerrect.draw();

		gameduration += 20;

		for (let i = 0; i < obstacles.length; i++) {
			obstacles[i].update(_width, _height);
		}

		window.setTimeout(animate, 20, _width, _height);

		// for (let i = 0; i < obstacles.length; i++) {
  //           if (playerrect.crashWith(obstacles[i])) {
  //               // ENDE          
  //           }
  //           else {
  //           	window.setTimeout(animate, 20, _width, _height);
  //           }
  //       }     
	}
}