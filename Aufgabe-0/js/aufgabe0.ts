document.addEventListener('DOMContentLoaded', function() {
	var name : string;
    name = prompt("Bitte geben Sie Ihren Namen ein"); 
    document.getElementById("greeting").innerHTML += name; 
});