//Duane Walters 3.19.2014 - Conditionals Worksheet


//Group 1 Celsius to Fahrenheit Converter

/*var degFahren = Number (prompt ("Enter the degrees in Fahrenheit",32));
var degCent;

degCent = 5/9 * (degFahren - 32);

document.write(degFahren + "\xB0 Farenheit is " + degCent + "\xB0 celcius<br />");
console.log(degFahren + "\xB0 Farenheit is " + degCent + "\xB0 celcius");

if(degCent < 0){
	document.write("You're freezing water.");
	console.log("You're freezing water.");
}

if(degCent == 100){
	document.write("You're boiling water.");
	console.log("You're boiling water.");
}

*/



//Group 2 Check the Login

var userName = prompt("Username", "blank");
var password = prompt("Password", " ");

if(userName + password == "James007" || userName + password == "Q007") {
	document.write("Hello 007, how are you today?");
	console.log("Hello 007, how are you today?");
}else{
	document.write("Sorry, you have entered the wrong username and/or password. Please try again.");
	console.log("Sorry, you have entered the wrong username and/or password. Please try again.");
	}
	
	