var Aufgabe_9;
(function (Aufgabe_9) {
    window.addEventListener("load", init);
    var flavors = ["Flavor 1", "Flavor 2", "Flavor 3"];
    var toppings = ["Topping 1", "Topping 2", "Topping 3"];
    var conecup = ["cone", "cup"];
    var shippingmethods = ["standard", "premium", "express"];
    var fieldsets = document.getElementsByTagName("fieldset");
    var sum = 0;
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
        var target = _event.target;
        if ((target.type == "checkbox") && (target.checked)) {
            sum++;
        }
        sum += -1 * (parseFloat(target.defaultValue) - parseFloat(target.value));
        console.log("Changed " + target.name + " from " + target.defaultValue + " to " + target.value);
        console.log(sum);
        target.defaultValue = target.value;
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
        }
    }
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=script.js.map