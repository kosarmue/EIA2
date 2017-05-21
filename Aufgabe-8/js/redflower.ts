namespace Aufgabe8 {
	export class RedFlower extends Flower {
		constructor (_x: number, _y: number) {
			super(_x, _y, "red");
			this.draw();
		}

		draw() {
			let color = "#EF3017";
			let blaetter = 8;
			let circleColor = "#FFFFFF";
			let blattratio = 3;
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