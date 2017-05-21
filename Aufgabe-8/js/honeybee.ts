namespace Aufgabe8 {
	export class HoneyBee extends Bee {
		targetx : number;
		targety : number;
		status : string;
		pausecounter : number;

		constructor(_x: number, _y: number) {
			super(_x, _y);
			this.setRandomTarget();
			this.status = "fly";
			this.pausecounter = 0;
			super.draw();
		}
		setRandomTarget(): void {
			let i: number = Math.floor(Math.random() * (flowers.length - 1));
            this.targetx = flowers[i].x;
            this.targety = flowers[i].y;
		}

		update(): void {
			this.move();
			super.draw();
		}

		move(): void {
		    if (this.status == "fly") {
		    	this.x += Math.floor(Math.random() * 8) - 4;
	            this.y += (this.targety - this.y)*0.05;
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
	            if ((this.targetx - this.x < 12 && this.targetx - this.x > -12) && (this.targety - this.y < 12 && this.targety - this.y > -12)) {
	            	this.status = "pause";
	            }
		    }
		    else {
		    	this.pausecounter += 1;
		    	if (this.pausecounter % 50 == 0) {
		    		this.setRandomTarget();
		    		this.status = "fly";
		    	}
		    }
			
		}
	}
}