//Duane Walters 3.20.2014 - Conditionals Personal


//Computer Funds


var paycheck = 1000;
var bankAcct = 900;
var computer = 1700;

var result = bankAcct + paycheck;
	console.log( ("You have "), (result), (" dollars. ") );
	document.write( ("You have "), (result), (" dollars. ") );

if( (paycheck >= computer) || (bankAcct >= computer) ){
	console.log("Yes, you have enough.");
		}else if (paycheck + bankAcct >= computer) {
			console.log("Yes, you have enough.");
			document.write("Yes, you have enough.");
		}else {
			console.log("I'm sorry, you don't have the funds.");
			document.write("I'm sorry, you don't have the funds.");
		}

