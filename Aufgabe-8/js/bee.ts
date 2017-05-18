namespace Aufgabe7 {
	export class Bee {
		x : number;
		y : number;
		color : string;
		bluewings : boolean;

		constructor(_x: number, _y: number) {
			this.setColor();
			this.setWingcolor();
			this.x = _x;
			this.y = _y;
		}

		draw(): void {
				// Korpus
			crc2.beginPath();
			crc2.ellipse(this.x, this.y, 16, 10, 0, 0, 2*Math.PI);
			crc2.closePath();
			crc2.strokeStyle = "#000000"
			crc2.stroke();

			let gradient : CanvasGradient = crc2.createLinearGradient(this.x-16,0,this.x+16,0);
				gradient.addColorStop(0, this.color);
				gradient.addColorStop(0.199, this.color);
				gradient.addColorStop(0.2, "black");
				gradient.addColorStop(0.399, "black");
				gradient.addColorStop(0.4, this.color);
				gradient.addColorStop(0.599, this.color);
				gradient.addColorStop(0.6, "black");
				gradient.addColorStop(0.799, "black");
				gradient.addColorStop(0.8, this.color);
				gradient.addColorStop(1, this.color);

			crc2.fillStyle = gradient;
			crc2.fill();

				// Flügel
			crc2.beginPath();
			crc2.ellipse(this.x+2, this.y-10, 10, 6, .5 * Math.PI, 0, 2*Math.PI)
			crc2.closePath();
			crc2.strokeStyle = "#000000";
			crc2.lineWidth=2;
			crc2.stroke();
			if (this.bluewings == true) {
				crc2.fillStyle = "#BCEAF9";
			}
			else {crc2.fillStyle = "#ffffff";}
			crc2.fill();

			crc2.beginPath();
			crc2.ellipse(this.x+8, this.y-10, 10, 6, .75 * Math.PI, 0, 2*Math.PI)
			crc2.closePath();
			crc2.strokeStyle = "#000000";
			crc2.lineWidth=2;
			crc2.stroke();
			if (this.bluewings == true) {
				crc2.fillStyle = "#BCEAF9";
			}
			else {crc2.fillStyle = "#ffffff";}
			crc2.fill();
		}

		setColor(): void {
			switch (Math.floor((Math.random() * 4) + 1)) {
			case 1:
				this.color = "gold";
				break;
			case 2:
				this.color = "peachpuff";
				break;
			case 3:
				this.color = "yellow";
				break;
			case 4:
				this.color = "orange";
				break;	
			default:
				this.color = "gold";
				break;
			}
		}

		setWingcolor(): void {
			if (Math.floor(Math.random() * 2)==1) {
				this.bluewings = true;
			}
			else {this.bluewings = false;}
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.x += Math.floor(Math.random() * 8) - 4;
            this.y += Math.random() * 6 - 3;
            	// Wieder Erscheinen beim Verlassen des Canvas
            if(this.x<0){
                this.x = canvas.width;
            }
            if(this.y<0){
                this.y = canvas.height;
            }
            if(this.y> canvas.height){
                this.y = 0;
            }
		}
	}

	
}