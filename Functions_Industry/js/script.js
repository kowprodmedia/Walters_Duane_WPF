//Duane Walters - 03.27.2014 Functions - Industry


function ageFunction(){
var yourAge =prompt ("Enter your age.", "3232");
var minor = 17;
var adult = 18;

var result = yourAge >= adult;
	console.log( ("You are "), (yourAge), (". ") );
	document.write( ("You are "), (yourAge), (". ") );

if( (yourAge >= adult) ){
	console.log("Congrats, you're a legal adult");
	document.write("Congrats, you're a legal adult");
		}else if (yourAge <= minor) {
			console.log("Boo, you're not quite old enough");
			document.write("Boo, you're not quite old enough");
		}else {
			console.log("Boo, you're not quite old enough");
			document.write("Boo, you're not quite old enough");
		}
	}