namespace Blumenwiese {
	window.addEventListener("load", init);
	let crc2: CanvasRenderingContext2D;
	let flowersize: number = 20;

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
		crc2.fillStyle = _color;
		crc2.fillRect(_x, _y, flowersize, flowersize);
	}
}