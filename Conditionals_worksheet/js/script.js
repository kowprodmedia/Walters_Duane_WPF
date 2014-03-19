//Duane Walters 3.19.2014 - Conditionals Worksheet


//Group 1 Celsius to Fahrenheit Converter

var degFahren = Number (prompt ("Enter the degrees in Fahrenheit",32));
var degCent;

degCent = 5/9 * (degFahren - 32);

document.write(degFahren + "\xB0 Farenheit is " + degCent + "\xB0 celcius<br />");

if(degCent < 0){
	document.write("You're freezing water.");
}

if(degCent == 100){
	document.write("You're boiling water");
}