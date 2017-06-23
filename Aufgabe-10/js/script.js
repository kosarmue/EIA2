var Aufgabe_10;
(function (Aufgabe_10) {
    window.addEventListener("load", init);
    var flavors = ["Chocolate", "Strawberry", "Raspberry", "Blueberry", "Vanilla", "Mango", "Stracciatella"];
    var toppings = ["Chocolate syrup", "Caramel syrup", "Chocolate Chips", "Rainbow sprinkles", "Cookie", "Cinnamon"];
    var conecup = ["Cone", "Cup"];
    var shippingmethods = ["Standard", "Premium", "Express"];
    var fieldsets = document.getElementsByTagName("fieldset");
    var flavorinputs = [];
    var toppinginputs = [];
    var shippinginputs = [];
    var conecupinputs = [];
    function init(_event) {
        createFlavors();
        createToppings();
        createConecup();
        createShippingmethods();
        for (var i = 0; i < fieldsets.length; i++) {
            fieldsets[i].addEventListener("change", change);
        }
        document.getElementById("verify").addEventListener("click", validate);
    }
    function validate() {
        for (var i = 0; i < document.getElementsByClassName("required").length; i++) {
            if (document.getElementsByClassName("required")[i].value == "") {
                document.getElementsByClassName("required")[i].classList.add("empty");
            }
            else if (document.getElementsByClassName("required")[i].classList.contains("empty")) {
                document.getElementsByClassName("required")[i].classList.remove("empty");
            }
        }
        for (var i = 0; i < document.getElementsByClassName("required").length; i++) {
            if (document.getElementsByClassName("required")[i].classList.contains("empty")) {
                document.getElementById("alert").textContent = "Please enter data into the red fields";
                break;
            }
            else {
                document.getElementById("alert").textContent = "";
            }
        }
    }
    function change(_event) {
        document.getElementById("order").removeChild(document.getElementById("ordersummary"));
        var sum = 0;
        for (var i = 0; i < flavorinputs.length; i++) {
            sum += parseFloat(flavorinputs[i].value);
        }
        for (var i = 0; i < toppinginputs.length; i++) {
            if (toppinginputs[i].checked) {
                sum += .5;
            }
        }
        for (var i = 0; i < shippinginputs.length; i++) {
            if (shippinginputs[i].checked) {
                sum += (i + 1) * 2;
            }
        }
        console.log(sum);
        displayOrder();
    }
    function displayOrder() {
        var table = document.createElement("table");
        var td = document.createElement("td");
        table.id = "ordersummary";
        for (var i = 0; i < flavorinputs.length; i++) {
            if (parseFloat(flavorinputs[i].value) != 0) {
                table.appendChild(document.createElement("tr"));
                var td1_1 = document.createElement("td");
                td1_1.innerHTML = flavors[i];
                table.lastChild.appendChild(td1_1);
                var td2_1 = document.createElement("td");
                td2_1.innerHTML = flavorinputs[i].value + " x 1€ = ";
                table.lastChild.appendChild(td2_1);
                var td3_1 = document.createElement("td");
                td3_1.innerHTML = flavorinputs[i].value + ",00 €";
                table.lastChild.appendChild(td3_1);
            }
        }
        table.appendChild(document.createElement("tr"));
        for (var i = 0; i < conecupinputs.length; i++) {
            if (conecupinputs[i].checked) {
                table.appendChild(document.createElement("tr"));
                var td1_2 = document.createElement("td");
                td1_2.innerHTML = conecup[i];
                table.lastChild.appendChild(td1_2);
            }
        }
        table.appendChild(document.createElement("tr"));
        for (var i = 0; i < toppinginputs.length; i++) {
            if (toppinginputs[i].checked) {
                table.appendChild(document.createElement("tr"));
                var td1_3 = document.createElement("td");
                td1_3.innerHTML = toppings[i];
                table.lastChild.appendChild(td1_3);
                var td2_2 = document.createElement("td");
                td2_2.innerHTML = "";
                table.lastChild.appendChild(td2_2);
                var td3_2 = document.createElement("td");
                td3_2.innerHTML = "0,50€";
                table.lastChild.appendChild(td3_2);
            }
        }
        table.appendChild(document.createElement("tr"));
        for (var i = 0; i < shippinginputs.length; i++) {
            if (shippinginputs[i].checked) {
                table.appendChild(document.createElement("tr"));
                var td1_4 = document.createElement("td");
                td1_4.innerHTML = shippingmethods[i] + " shipping";
                table.lastChild.appendChild(td1_4);
                var td2_3 = document.createElement("td");
                td2_3.innerHTML = "";
                table.lastChild.appendChild(td2_3);
                var td3_3 = document.createElement("td");
                td3_3.innerHTML = (i + 1) * 2 + ",00€";
                table.lastChild.appendChild(td3_3);
            }
        }
        table.appendChild(document.createElement("tr"));
        document.getElementById("order").appendChild(table);
        table.appendChild(document.createElement("tr"));
        var td1 = document.createElement("td");
        td1.innerHTML = "TOTAL";
        table.lastChild.appendChild(td1);
        var td2 = document.createElement("td");
        td2.innerHTML = "";
        table.lastChild.appendChild(td2);
        var td3 = document.createElement("td");
        td3.innerHTML = calculateSum() + "€";
        table.lastChild.appendChild(td3);
    }
    function calculateSum() {
        var sum = 0;
        for (var i = 0; i < flavorinputs.length; i++) {
            sum += parseFloat(flavorinputs[i].value);
        }
        for (var i = 0; i < toppinginputs.length; i++) {
            if (toppinginputs[i].checked) {
                sum += 0.5;
            }
        }
        for (var i = 0; i < shippinginputs.length; i++) {
            if (shippinginputs[i].checked) {
                sum += (i + 1) * 2;
            }
        }
        return sum.toLocaleString(undefined, { minimumFractionDigits: 2 });
    }
    function createFlavors() {
        for (var i = 0; i < flavors.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(flavors[i]));
            var input = document.createElement("input");
            input.type = "number";
            input.name = flavors[i];
            input.id = flavors[i];
            input.defaultValue = "0";
            input.step = "1";
            input.min = "0";
            input.max = "10";
            label.appendChild(input);
            document.getElementById("flavor").appendChild(label);
            flavorinputs.push(input);
        }
    }
    function createToppings() {
        for (var i = 0; i < toppings.length; i++) {
            var input = document.createElement("input");
            input.type = "checkbox";
            input.name = toppings[i];
            input.id = toppings[i];
            input.value = toppings[i];
            var label = document.createElement("label");
            label.appendChild(input);
            label.appendChild(document.createTextNode(toppings[i]));
            document.getElementById("topping").appendChild(label);
            toppinginputs.push(input);
        }
    }
    function createConecup() {
        for (var i = 0; i < conecup.length; i++) {
            var input = document.createElement("input");
            input.type = "radio";
            input.name = "conecup";
            input.id = conecup[i];
            input.value = conecup[i];
            var label = document.createElement("label");
            label.appendChild(input);
            label.appendChild(document.createTextNode(conecup[i]));
            document.getElementById("conecup").appendChild(label);
            conecupinputs.push(input);
        }
    }
    function createShippingmethods() {
        for (var i = 0; i < shippingmethods.length; i++) {
            var input = document.createElement("input");
            input.type = "radio";
            input.name = "shippingmethod";
            input.id = shippingmethods[i];
            input.value = shippingmethods[i];
            var label = document.createElement("label");
            label.appendChild(input);
            label.appendChild(document.createTextNode(shippingmethods[i]));
            document.getElementById("shipping").appendChild(label);
            shippinginputs.push(input);
        }
    }
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=script.js.map