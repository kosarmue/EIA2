namespace Aufgabe7 {
	export class Flower {
		x : number;
		y : number;
		type : string;

		constructor(_x: number, _y: number, _type: string) {
			this.x = _x;
			this.y = _y;
			this.type = _type;
			switch (_type) {
				case "yellow":
					this.draw("#EFD717", 8, "#FFFFFF", 4);
					break;
				case "white":
					this.draw("#FFFFFF", 7, "#EFD717", 8);
					break;
				case "blue":
					this.draw("#11BAF9", 3, "#FFFFFF", 2);
					break;
				default:
					this.draw("#EF3017", 8, "#FFFFFF", 3);
					break;
			}
		}

		draw(_color: string, _blaetter: number, _circleColor: string, _blattratio: number): void {
				// blätter zeichnen
			crc2.beginPath();
		    for (var n = 0; n < _blaetter; n++) {
		    	let blattbreite: number = 24 / _blattratio;
		    	crc2.moveTo(this.x, this.y);
		    	crc2.ellipse(this.x, this.y, 24, blattbreite, n*(360/_blaetter) * Math.PI/180, 0, 2 * Math.PI)
		    }
		    crc2.closePath();
		    crc2.fillStyle = _color;
		    crc2.fill();

		    	// punkt zeichnen
		    crc2.beginPath();
		    crc2.arc(this.x, this.y, 24 / 5, 0, 2 * Math.PI, false);
		    crc2.fillStyle = _circleColor;
		    crc2.fill();
		}
	}
}