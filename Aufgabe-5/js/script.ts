namespace Aufgabe5 {
	window.addEventListener("load", init);
	let crc2: CanvasRenderingContext2D;
	let flowersize: number = 24;

	function init(_event: Event): void {
		let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
		crc2 = canvas.getContext("2d");

		let flowernr: number;
		let x: number;
		let y: number;
		let flowernumber: number = 16;

		drawSky(canvas.width, canvas.height);
		drawField(canvas.width, canvas.height);
		drawSun();
		drawMountain(220, 180, canvas.height);
		drawMountain(400, 240, canvas.height);

		drawYellow(650,130, canvas.height);
		drawYellow(400,200, canvas.height);
		drawYellow(550,350, canvas.height);
		drawYellow(500,140, canvas.height);
		drawWhite(420,40, canvas.height);
		drawWhite(520,160, canvas.height);
		drawWhite(480,300, canvas.height);
		drawWhite(720,200, canvas.height);
		drawBlue(380,90, canvas.height);
		drawBlue(560,30, canvas.height);
		drawBlue(430,260, canvas.height);
		drawBlue(680,320, canvas.height);
		drawRed(500,280, canvas.height);
		drawRed(610,230, canvas.height);
		drawRed(530,130, canvas.height);
		drawRed(370,300, canvas.height);

		for (let i: number = 0; i<flowernumber; i++) { 
			flowernr = Math.floor((Math.random() * 4) + 0);
			x = Math.floor(Math.random() * ((canvas.width/2-flowersize) - (flowersize+1)) + flowersize);
			y = Math.floor(Math.random() * ((canvas.height-flowersize)-((canvas.height/2+flowersize)+1)) + (canvas.height/2+flowersize));
				// Math.floor(Math.random() * (max - min + 1)) + min;
			switch (flowernr) {
				case 0:
					drawYellow(x, y, 0);
					break;
				case 1:
					drawWhite(x, y, 0);
					break;
				case 2:
					drawBlue(x, y, 0);
					break;
				case 3:
					drawRed(x, y, 0);
					break;
				default:
					break;
			}
		}

		drawBienenkorb(670, 440);
		for (let i: number = 0; i<10; i++) {
			drawBee(640, 410);
		}

		document.getElementsByClassName("canvas")[0].addEventListener("click", addBee);

	}

	function drawSky(_width: number, _height: number): void {
		crc2.fillStyle = "#78BEE0";
		crc2.fillRect(0, 0, _width, _height);
	}

	function drawField(_width: number, _height: number): void {
		crc2.fillStyle = "#95D26F";
		crc2.fillRect(0, _height/2, _width, _height/2);
	}

	function drawSun(): void {
		crc2.beginPath();
		crc2.arc(560,120,60,0*Math.PI,2*Math.PI);
		crc2.closePath();
		crc2.fillStyle = "#FCC631";
	    crc2.fill();
	}

	function drawMountain(_x: number, _y:number, _height:number): void {
		crc2.beginPath();
		crc2.moveTo(_x, _y); // obere Ecke
		crc2.lineTo(_x+(_height/2-_y), _height/2); // rechte untere Ecke
		crc2.lineTo(_x-(_height/2-_y), _height/2); // linke untere Ecke
		crc2.closePath();
		crc2.fillStyle = "#BDBDBD";
		crc2.fill();
		drawPeak(_x, _y, _height);
	}

	function drawPeak(_x:number, _y:number, _height:number): void {
		crc2.beginPath();
		crc2.moveTo(_x, _y); // obere Ecke
		let peakSize: number = (_height/2-_y)/3;
		crc2.lineTo(_x+peakSize, _y+peakSize);
		crc2.lineTo(_x-peakSize, _y+peakSize);
		crc2.closePath();
		crc2.fillStyle = "#ffffff";
		crc2.fill();
	}

	function drawFlower(_color: string, _x: number, _y: number, _blaetter: number, _circleColor: string, _blattratio: number): void {
			// blätter zeichnen
		crc2.beginPath();
	    for (var n = 0; n < _blaetter; n++) {
	    	let blattbreite: number = flowersize / _blattratio;
	    	crc2.moveTo(_x, _y);
	    	crc2.ellipse(_x, _y, flowersize, blattbreite, n*(360/_blaetter) * Math.PI/180, 0, 2 * Math.PI)
	    }
	    crc2.closePath();
	    crc2.fillStyle = _color;
	    crc2.fill();

	    	// punkt zeichnen
	    crc2.beginPath();
	    crc2.arc(_x, _y, flowersize / 5, 0, 2 * Math.PI, false);
	    crc2.fillStyle = _circleColor;
	    crc2.fill();
		}

	function drawYellow(_x: number, _y: number, _height: number): void {
		drawFlower("#EFD717", _x, _y+_height/2, 8, "#FFFFFF", 4);
	}

	function drawWhite(_x: number, _y: number, _height: number): void {
		drawFlower("#FFFFFF", _x, _y+_height/2, 7, "#EFD717", 8);		
	}

	function drawBlue(_x: number, _y: number, _height: number): void {
		drawFlower("#11BAF9", _x, _y+_height/2, 3, "#FFFFFF", 2);
	}

	function drawRed(_x: number, _y: number, _height: number): void {
		drawFlower("#EF3017", _x, _y+_height/2, 8, "#FFFFFF", 3);		
	}

	function drawBienenkorb(_x: number, _y:number): void {
		crc2.beginPath();
		crc2.ellipse(_x, _y, 60, 100, 0, 1*Math.PI, 0);
		crc2.closePath();
		crc2.strokeStyle = "#3D251C";
		crc2.stroke();
		crc2.fillStyle = "#835A4B";
		crc2.fill();

		crc2.beginPath();
		crc2.ellipse(_x-30, _y-30, 16, 16, 0, 2*Math.PI, 0);
		crc2.closePath();
		crc2.fillStyle = "#3D251C";
		crc2.fill();

	}

	function addBee(_event: Event): void {
		// drawBee(_event.clientX, _event.clientY);
	}

	function drawBee(_x: number, _y: number): void {
		crc2.beginPath();
		crc2.ellipse(_x, _y, 16, 10, 0, 0, 2*Math.PI);
		crc2.closePath();
		crc2.strokeStyle = "#000000"
		crc2.stroke();

		let gradient : CanvasGradient = crc2.createLinearGradient(_x-16,0,_x+16,0);
		gradient.addColorStop(0, "yellow");
		gradient.addColorStop(0.199, "yellow");
		gradient.addColorStop(0.2, "black");
		gradient.addColorStop(0.399, "black");
		gradient.addColorStop(0.4, "yellow");
		gradient.addColorStop(0.599, "yellow");
		gradient.addColorStop(0.6, "black");
		gradient.addColorStop(0.799, "black");
		gradient.addColorStop(0.8, "yellow");
		gradient.addColorStop(1, "yellow");


		crc2.fillStyle = gradient;
		crc2.fill();

		crc2.beginPath();
		crc2.ellipse(_x+2, _y-10, 10, 6, .5 * Math.PI, 0, 2*Math.PI)
		crc2.closePath();
		crc2.strokeStyle = "#000000";
		crc2.lineWidth=2;
		crc2.stroke();
		crc2.fillStyle = "#ffffff";
		crc2.fill();

		crc2.beginPath();
		crc2.ellipse(_x+8, _y-10, 10, 6, .75 * Math.PI, 0, 2*Math.PI)
		crc2.closePath();
		crc2.strokeStyle = "#000000";
		crc2.lineWidth=2;
		crc2.stroke();
		crc2.fillStyle = "#ffffff";
		crc2.fill();
	}
}