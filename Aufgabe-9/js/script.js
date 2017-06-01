var Aufgabe_9;
(function (Aufgabe_9) {
    window.addEventListener("load", init);
    var flavors = ["Flavor 1", "Flavor 2", "Flavor 3"];
    var toppings = ["Topping 1", "Topping 2", "Topping 3"];
    var conecup = ["cone", "cup"];
    var shippingmethods = ["standard", "premium", "express"];
    var fieldsets = document.getElementsByTagName("fieldset");
    var flavorinputs = [];
    var toppinginputs = [];
    var shippinginputs = [];
    function init(_event) {
        createFlavors();
        createToppings();
        createConecup();
        createShippingmethods();
        for (var i = 0; i < fieldsets.length; i++) {
            fieldsets[i].addEventListener("change", change);
        }
    }
    function change(_event) {
        document.getElementById("output").removeChild(document.getElementById("ordersummary"));
        var sum = 0;
        var target = _event.target;
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
        console.log("Changed " + target.name + " to " + target.value);
        console.log(sum);
        displayOrder();
    }
    function displayOrder() {
        var table = document.createElement("table");
        table.id = "ordersummary";
        for (var i = 0; i < flavorinputs.length; i++) {
            if (parseFloat(flavorinputs[i].value) != 0) {
                table.appendChild(document.createElement("tr"));
                table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode(flavors[i])));
                table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode(flavorinputs[i].value + " x 1€")));
                table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode("= " + flavorinputs[i].value + ",00 €")));
            }
        }
        table.appendChild(document.createElement("tr"));
        for (var i = 0; i < toppinginputs.length; i++) {
            if (toppinginputs[i].checked) {
                table.appendChild(document.createElement("tr"));
                table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode(toppings[i])));
                table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode("")));
                table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode("+ 0,50€")));
            }
        }
        table.appendChild(document.createElement("tr"));
        for (var i = 0; i < shippinginputs.length; i++) {
            if (shippinginputs[i].checked) {
                table.appendChild(document.createElement("tr"));
                table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode(shippingmethods[i])));
                table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode("")));
                table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode((i + 1) * 2 + "€")));
            }
        }
        document.getElementById("output").appendChild(table);
    }
    function createFlavors() {
        for (var i = 0; i < toppings.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(flavors[i]));
            document.getElementById("flavor").appendChild(label);
            var input = document.createElement("input");
            input.type = "number";
            input.name = "flavor";
            input.id = flavors[i];
            input.defaultValue = "0";
            input.step = "1";
            input.min = "0";
            input.max = "10";
            document.getElementById("flavor").appendChild(input);
            flavorinputs.push(input);
        }
    }
    function createToppings() {
        for (var i = 0; i < toppings.length; i++) {
            var input = document.createElement("input");
            input.type = "checkbox";
            input.name = "topping";
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
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=script.js.map