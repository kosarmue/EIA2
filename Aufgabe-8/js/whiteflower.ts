namespace Aufgabe8 {
	export class WhiteFlower extends Flower {
		constructor (_x: number, _y: number) {
			super(_x, _y, "white");
			this.draw();
		}

		draw() {
			let color =  "#FFFFFF";
			let blaetter = 8;
			let circleColor = "#EFD717";
			let blattratio = 8;
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