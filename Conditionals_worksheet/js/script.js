//Duane Walters 3.19.2014 - Conditionals Worksheet


//Group 1 - Celsius to Fahrenheit Converter


var degFahren = Number (213);
var degCent;

degCent = 5/9 * (degFahren - 32);

document.write(degFahren + "\xB0 Farenheit is " + degCent + "\xB0 celcius<br />");
console.log(degFahren + "\xB0 Farenheit is " + degCent + "\xB0 celcius");

if(degCent < 0){
	document.write("You're freezing water.<br />");
	console.log("You're freezing water.");
	}else if (degCent > 100) {
		document.write("You're boiling water.<br />");
		console.log("You're boiling water.");
	}else if (degCent > 0  && degCent <= 100) {
		document.write("The water is fine.<br />");
		console.log("The water is fine.");
		
	}





//Group 2 - Check the Login


var userName = ("James", "Q");
var password = ("007", "007");

if(userName == "James" && password == "007"){
	document.write("Hello James!<br />");
	console.log("Hello James!");
	}else if (userName == "Q" && password == "007") {
		document.write("Hello Q!<br />");
		console.log("Hello Q!");
	}




/*if(userName + password == "James007" || userName + password == "Q007"){
	document.write("Hello 007, how are you today?");
	console.log("Hello 007, how are you today?");
}else{
	document.write("Sorry, you have entered the wrong username and/or password. Please try again.");
	console.log("Sorry, you have entered the wrong username and/or password. Please try again.");
	}*/





//Group 3 - Movie Ticket Price

var age = 7;
var discountTime = ("3", "4", "5");

if(age < 10 && age > 50){

	console.log("eligible");
}