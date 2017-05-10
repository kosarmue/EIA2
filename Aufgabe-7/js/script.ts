namespace Aufgabe7 {
	window.addEventListener("load", init);
	export let crc2: CanvasRenderingContext2D;
	export let canvas: HTMLCanvasElement;
	let flowersize: number = 24;

	let bees : Bee[] = [];
	let flowers : Flower[] = [];
	let bienen : number = 10;
	let imgData: ImageData;

	function init(_event: Event): void {
		
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

		
		flowers.push(new Flower(650, 710, "yellow"));
		flowers.push(new Flower(100, 550, "yellow"));
		flowers.push(new Flower(230, 600, "yellow"));
		flowers.push(new Flower(300, 620, "yellow"));
		flowers.push(new Flower(50, 580, "white"));
		flowers.push(new Flower(500, 630, "white"));
		flowers.push(new Flower(250, 520, "white"));
		flowers.push(new Flower(410, 710, "white"));
		flowers.push(new Flower(590, 550, "blue"));
		flowers.push(new Flower(390, 535, "blue"));
		flowers.push(new Flower(150, 720, "blue"));
		flowers.push(new Flower(450, 600, "blue"));
		flowers.push(new Flower(700, 520, "red"));
		flowers.push(new Flower(540, 560, "red"));
		flowers.push(new Flower(340, 680, "red"));
		flowers.push(new Flower(170, 610, "red"));

			// Random Flowers
		for (let i: number = 0; i<flowernumber; i++) { 
			x = Math.floor(Math.random() * (canvas.width - 0 + 1));
			y = Math.floor(Math.random() * ((canvas.height/2+canvas.height/5) - (canvas.height/2+20) + 1)) + canvas.height/2+20;
				// Math.floor(Math.random() * (max - min + 1)) + min;
			switch (Math.floor((Math.random() * 4) + 0)) {
				case 0:
					new Flower(x, y, "yellow");
					break;
				case 1:
					new Flower(x, y, "white");
					break;
				case 2:
					new Flower(x, y, "blue");
					break;
				case 3:
					new Flower(x, y, "red");
					break;
				default:
					break;
			}
		}

        console.log(flowers);

		drawBienenkorb(670, 640);

		imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); // Speichern der Landschaft

		for (let i: number = 0; i<bienen; i++) {
			let b: Bee = new Bee(640, 610);
            bees[i] = b;
		}

		window.setTimeout(animate, 20, canvas.width, canvas.height);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("touchstart", addBee);
	}

	function addBee(_event: Event): void {
		let b: Bee = new Bee(640, 610);
		bees.push(b)
	}

	function animate(_width: number, _height: number): void {
		crc2.putImageData(imgData, 0, 0); // Laden der Landschaft
		for (let i: number = 0; i < bees.length; i++) { // Zufällige Bewegung der Bienen
			let b: Bee = bees[i];
            b.update();
        }

        window.setTimeout(animate, 20, _width, _height);
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
}