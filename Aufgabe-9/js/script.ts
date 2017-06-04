namespace Aufgabe_9 {
	window.addEventListener("load", init);

	let flavors: string[] = ["Chocolate", "Strawberry", "Raspberry", "Blueberry", "Vanilla", "Mango", "Stracciatella"]
	let toppings: string[] = ["Chocolate syrup", "Caramel syrup", "Chocolate Chips", "Rainbow sprinkles", "Cookie", "Cinnamon"]
	let conecup: string[] = ["Cone", "Cup"]
	let shippingmethods: string[] = ["Standard", "Premium", "Express"]
	let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset")
	let flavorinputs: HTMLInputElement[] = [];
	let toppinginputs: HTMLInputElement[] = [];
	let shippinginputs: HTMLInputElement[] = [];
	let conecupinputs: HTMLInputElement[] = [];

	function init(_event: Event): void {
		createFlavors();
		createToppings();
		createConecup();
		createShippingmethods();
		for (let i = 0; i < fieldsets.length; i++) {
			fieldsets[i].addEventListener("change", change)
		}
		document.getElementById("verify").addEventListener("click", validate);
	}

	function validate(): void {
		for (let i = 0; i < document.getElementsByClassName("required").length; i++) {
			if ((<HTMLInputElement>document.getElementsByClassName("required")[i]).value == "") {
				document.getElementsByClassName("required")[i].classList.add("empty");
			}
			else if (document.getElementsByClassName("required")[i].classList.contains("empty")) {
				document.getElementsByClassName("required")[i].classList.remove("empty");
			}
		}
		for (let i = 0; i < document.getElementsByClassName("required").length; i++) {
			if (document.getElementsByClassName("required")[i].classList.contains("empty")) {
				document.getElementById("alert").textContent = "Please enter data into the red fields";
				break;
			}
			else {
				document.getElementById("alert").textContent = "";
			}
		}
	}

	function change(_event: Event): void {	
		document.getElementById("order").removeChild(document.getElementById("ordersummary"));
		let sum: number = 0;
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
		console.log(sum);

		displayOrder();
	}

	function displayOrder(): void {
		let table : HTMLTableElement = document.createElement("table");
		let td : HTMLElement = document.createElement("td");
		table.id = "ordersummary";
		for (let i = 0; i < flavorinputs.length; i++) {
			if (parseFloat(flavorinputs[i].value) != 0) {
				table.appendChild(document.createElement("tr"));
				let td1 : HTMLElement = document.createElement("td");
				td1.innerHTML = flavors[i];
				table.lastChild.appendChild(td1);
				let td2 : HTMLElement = document.createElement("td");
				td2.innerHTML = flavorinputs[i].value + " x 1€ = ";
				table.lastChild.appendChild(td2);
				let td3 : HTMLElement = document.createElement("td");
				td3.innerHTML = flavorinputs[i].value + ",00 €";
				table.lastChild.appendChild(td3);
			}
		}
		table.appendChild(document.createElement("tr"));
		for (let i = 0; i < conecupinputs.length; i++) {
			if (conecupinputs[i].checked) {
				table.appendChild(document.createElement("tr"));
				let td1 : HTMLElement = document.createElement("td");
				td1.innerHTML = conecup[i];
				table.lastChild.appendChild(td1);
			}
		}
		table.appendChild(document.createElement("tr"));
		for (let i = 0; i < toppinginputs.length; i++) {
			if (toppinginputs[i].checked) {
				table.appendChild(document.createElement("tr"));
				let td1 : HTMLElement = document.createElement("td");
				td1.innerHTML = toppings[i];
				table.lastChild.appendChild(td1);
				let td2 : HTMLElement = document.createElement("td");
				td2.innerHTML = "";
				table.lastChild.appendChild(td2);
				let td3 : HTMLElement = document.createElement("td");
				td3.innerHTML = "0,50€";
				table.lastChild.appendChild(td3);
			}
		}
		table.appendChild(document.createElement("tr"));
		for (let i = 0; i < shippinginputs.length; i++) {
			if (shippinginputs[i].checked) {
				table.appendChild(document.createElement("tr"));
				let td1 : HTMLElement = document.createElement("td");
				td1.innerHTML = shippingmethods[i] + " shipping";
				table.lastChild.appendChild(td1);
				let td2 : HTMLElement = document.createElement("td");
				td2.innerHTML = "";
				table.lastChild.appendChild(td2);
				let td3 : HTMLElement = document.createElement("td");
				td3.innerHTML = (i+1)*2 + ",00€";
				table.lastChild.appendChild(td3);
			}
		}
		table.appendChild(document.createElement("tr"));
		document.getElementById("order").appendChild(table);
		table.appendChild(document.createElement("tr"));
		let td1 : HTMLElement = document.createElement("td");
		td1.innerHTML = "TOTAL";
		table.lastChild.appendChild(td1);
		let td2 : HTMLElement = document.createElement("td");
		td2.innerHTML = "";
		table.lastChild.appendChild(td2);
		let td3 : HTMLElement = document.createElement("td");
		td3.innerHTML = calculateSum() + "€";
		table.lastChild.appendChild(td3);
	}

	function calculateSum(): string {
		let sum: number = 0;
		for (let i = 0; i < flavorinputs.length; i++) {
			sum += parseFloat(flavorinputs[i].value);
		}
		for (let i = 0; i < toppinginputs.length; i++) {
			if (toppinginputs[i].checked) {
				sum += 0.5;
			}
		}
		for (let i = 0; i < shippinginputs.length; i++) {
			if (shippinginputs[i].checked) {
				sum += (i+1)*2;
			}
		}
		return sum.toLocaleString(undefined, { minimumFractionDigits: 2 });
	}

	function createFlavors(): void {
		for (let i = 0; i < toppings.length; i++) {
			let label : HTMLLabelElement = document.createElement("label");
			label.appendChild(document.createTextNode(flavors[i]));
			let input : HTMLInputElement = document.createElement("input");
			input.type = "number";
			input.name = "flavor"
			input.id = flavors[i];
			input.defaultValue = "0";
			input.step = "1";
			input.min = "0";
			input.max = "10";
			label.appendChild(input);
			document.getElementById("flavor").appendChild(label);
			// document.getElementById("flavor").appendChild(document.createElement("br"));
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
			conecupinputs.push(input);
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
