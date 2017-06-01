namespace Aufgabe_9 {
	window.addEventListener("load", init);

	let flavors: string[] = ["Flavor 1", "Flavor 2", "Flavor 3"]
	let toppings: string[] = ["Topping 1", "Topping 2", "Topping 3"]
	let conecup: string[] = ["cone", "cup"]
	let shippingmethods: string[] = ["standard", "premium", "express"]
	let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset")
	let sum: number = 0;

	function init(_event: Event): void {
		createFlavors();
		createToppings();
		createConecup();
		createShippingmethods();
		for (let i = 0; i < fieldsets.length; i++) {
			fieldsets[i].addEventListener("change", change)
		}
	}

	function change(_event: Event): void {
		
		let target: HTMLInputElement = <HTMLInputElement>_event.target;
		if((target.type == "checkbox") && (target.checked)) {
			sum++
		}
		sum += -1*(parseFloat(target.defaultValue) - parseFloat(target.value));

		console.log("Changed " + target.name + " from " + target.defaultValue + " to " + target.value);
		console.log(sum);
		target.defaultValue = target.value;
	}

	function createFlavors(): void {
		for (let i = 0; i < toppings.length; i++) {
			let label : HTMLLabelElement = document.createElement("label");
			label.appendChild(document.createTextNode(flavors[i]));
			document.getElementById("flavor").appendChild(label);
			let input : HTMLInputElement = document.createElement("input");
			input.type = "number";
			input.name = "flavor"
			input.id = flavors[i];
			input.defaultValue = "0";
			input.step = "1";
			input.min = "0";
			input.max = "10";
			document.getElementById("flavor").appendChild(input);
		}
	}

	function createToppings(): void {
		for (let i = 0; i < toppings.length; i++) {
			let input : HTMLInputElement = document.createElement("input");
			input.type = "checkbox";
			input.name = "topping";
			input.id = toppings[i];
			input.value = toppings[i];
			let label : HTMLLabelElement = document.createElement("label");
			label.appendChild(input);
			label.appendChild(document.createTextNode(toppings[i]));
			document.getElementById("topping").appendChild(label);
		}
	}

	function createConecup(): void {
		for (let i = 0; i < conecup.length; i++) {
			let input : HTMLInputElement = document.createElement("input");
			input.type = "radio";
			input.name = "conecup";
			input.id = conecup[i];
			input.value = conecup[i];
			let label : HTMLLabelElement = document.createElement("label");
			label.appendChild(input);
			label.appendChild(document.createTextNode(conecup[i]));
			document.getElementById("conecup").appendChild(label);
		}
	}

	function createShippingmethods(): void {
		for (let i = 0; i < shippingmethods.length; i++) {
			let input : HTMLInputElement = document.createElement("input");
			input.type = "radio";
			input.name = "shippingmethod";
			input.id = shippingmethods[i];
			input.value = shippingmethods[i];
			let label : HTMLLabelElement = document.createElement("label");
			label.appendChild(input);
			label.appendChild(document.createTextNode(shippingmethods[i]));
			document.getElementById("shipping").appendChild(label);
		}
	}
}
