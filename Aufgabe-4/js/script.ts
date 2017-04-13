namespace Blumenwiese {
	window.addEventListener("load", init);
	let crc2: CanvasRenderingContext2D;
	let flowersize: number = 30;

	function init(_event: Event): void {
		let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
		crc2 = canvas.getContext("2d");

		let color: string;
		let colornr: number;
		let x: number;
		let y: number;
		let colors: string[] = ["#11BAF9", "#EFD717", "#EF3017", "#AB7ACF"]; // blau, gelb, rot, lila
		let flowernumber: number = 30;

		drawSky(canvas.width, canvas.height);
		drawField(canvas.width, canvas.height);

		for (let i: number = 0; i<flowernumber; i++) { 
			colornr = Math.floor((Math.random() * 4) + 0);
			color = colors[colornr];
			x = Math.floor(Math.random() * ((canvas.width-flowersize) - (flowersize+1)) + flowersize);
			y = Math.floor(Math.random() * ((canvas.height-flowersize)-((canvas.height/2+flowersize)+1)) + (canvas.height/2+flowersize));
				// Math.floor(Math.random() * (max - min + 1)) + min;

			switch (colornr) {
				case 0:
					drawGelb()
					break;
				
				default:
					break;
			}

			drawFlower(color, x, y);
		}
	}

	function drawSky(_width: number, _height: number): void {
		crc2.fillStyle = "#78BEE0";
		crc2.fillRect(0, 0, _width, _height);
	}

	function drawField(_width: number, _height: number): void {
		crc2.fillStyle = "#95D26F";
		crc2.fillRect(0, _height/2, _width, _height/2);
	}

	function drawFlower(_color: string, _x: number, _y: number): void {
		// crc2.fillStyle = _color;
		// crc2.fillRect(_x, _y, flowersize, flowersize);

		crc2.beginPath();
	    // draw petals
	    let blaetter: number = 6;
	    for (var n = 0; n < blaetter; n++) {
	        var theta1 = ((Math.PI * 2) / blaetter) * (n + 1);
	        var theta2 = ((Math.PI * 2) / blaetter) * (n);
	        
	        var x1 = (flowersize * Math.sin(theta1)) + _x;
	        var y1 = (flowersize * Math.cos(theta1)) + _y;
	        var x2 = (flowersize * Math.sin(theta2)) + _x;
	        var y2 = (flowersize * Math.cos(theta2)) + _y;
	        
	        crc2.moveTo(_x, _y);
	        crc2.bezierCurveTo(x1, y1, x2, y2, _x, _y);
	    }
	    crc2.closePath();
	    crc2.fillStyle = _color;
	    crc2.fill();

	     // draw yellow center
	    crc2.beginPath();
	    crc2.arc(_x, _y, flowersize / 5, 0, 2 * Math.PI, false);
	    crc2.fillStyle = "white";
	    crc2.fill();
		}

	function drawGelb(): void {

	}

	function drawBlau(): void {
		
	}

	function drawLila(): void {
		
	}

	function drawRot(): void {
		
	}
}