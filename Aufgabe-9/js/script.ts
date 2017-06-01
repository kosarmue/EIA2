namespace Aufgabe_9 {
	window.addEventListener("load", init);

	let flavors: string[] = ["Flavor 1", "Flavor 2", "Flavor 3"]
	let toppings: string[] = ["Topping 1", "Topping 2", "Topping 3"]
	let conecup: string[] = ["cone", "cup"]
	let shippingmethods: string[] = ["standard", "premium", "express"]
	let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset")
	let flavorinputs: HTMLInputElement[] = [];
	let toppinginputs: HTMLInputElement[] = [];
	let shippinginputs: HTMLInputElement[] = [];

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
		document.getElementById("output").removeChild(document.getElementById("ordersummary"));
		let sum: number = 0;
		let target: HTMLInputElement = <HTMLInputElement>_event.target;
		for (let i = 0; i < flavorinputs.length; i++) {
			sum += parseFloat(flavorinputs[i].value);
		}

		for (let i = 0; i < toppinginputs.length; i++) {
			if (toppinginputs[i].checked) {
				sum += .5;
			}
		}

		for (let i = 0; i < shippinginputs.length; i++) {
			if (shippinginputs[i].checked) {
				sum += (i+1)*2;
			}
		}

		console.log("Changed " + target.name + " to " + target.value);
		console.log(sum);

		displayOrder();
	}

	function displayOrder(): void {
		let table : HTMLTableElement = document.createElement("table");
		table.id = "ordersummary";
		for (let i = 0; i < flavorinputs.length; i++) {
			if (parseFloat(flavorinputs[i].value) != 0) {
				table.appendChild(document.createElement("tr"));
				table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode(flavors[i])));
				table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode(flavorinputs[i].value + " x 1€")));
				table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode("= " + flavorinputs[i].value + ",00 €")));
			}
		}
		table.appendChild(document.createElement("tr"));
		for (let i = 0; i < toppinginputs.length; i++) {
			if (toppinginputs[i].checked) {
				table.appendChild(document.createElement("tr"));
				table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode(toppings[i])));
				table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode("")));
				table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode("+ 0,50€")));
			}
		}
		table.appendChild(document.createElement("tr"));
		for (let i = 0; i < shippinginputs.length; i++) {
			if (shippinginputs[i].checked) {
				table.appendChild(document.createElement("tr"));
				table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode(shippingmethods[i])));
				table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode("")));
				table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode((i+1)*2 + "€")));
			}
		}
		document.getElementById("output").appendChild(table);
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
			flavorinputs.push(input);
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
			toppinginputs.push(input);
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
			shippinginputs.push(input);
		}
	}
}
