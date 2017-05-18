namespace Aufgabe7 {
	export class Flower {
		x : number;
		y : number;
		type : string;

		constructor(_x: number, _y: number, _type: string) {
			this.x = _x;
			this.y = _y;
			this.type = _type;
			this.draw();
		}

		draw(): void {
			let color: string;
			let blaetter: number;
			let circleColor: string;
			let blattratio: number;
			switch (this.type) {
				case "yellow":
					color = "#EFD717";
					blaetter = 8;
					circleColor = "#FFFFFF";
					blattratio = 4;
					//this.draw("#EFD717", 8, "#FFFFFF", 4);
					break;
				case "white":
					color = "#FFFFFF";
					blaetter = 8;
					circleColor = "#EFD717";
					blattratio = 8;
					//this.draw("#FFFFFF", 8, "#EFD717", 8);
					break;
				case "blue":
					color = "#11BAF9";
					blaetter = 3;
					circleColor = "#FFFFFF";
					blattratio = 2;
					//this.draw("#11BAF9", 3, "#FFFFFF", 2);
					break;
				default:
					color = "#EF3017";
					blaetter = 8;
					circleColor = "#FFFFFF";
					blattratio = 3;
					//this.draw("#EF3017", 8, "#FFFFFF", 3);
					break;
			}
				// blätter zeichnen
			crc2.beginPath();
		    for (var n = 0; n < blaetter; n++) {
		    	let blattbreite: number = 24 / blattratio;
		    	crc2.moveTo(this.x, this.y);
		    	crc2.ellipse(this.x, this.y, 24, blattbreite, n*(360/blaetter) * Math.PI/180, 0, 2 * Math.PI)
		    }
		    crc2.closePath();
		    crc2.fillStyle = color;
		    crc2.fill();

		    	// punkt zeichnen
		    crc2.beginPath();
		    crc2.arc(this.x, this.y, 24 / 5, 0, 2 * Math.PI, false);
		    crc2.fillStyle = circleColor;
		    crc2.fill();
		}
	}
}