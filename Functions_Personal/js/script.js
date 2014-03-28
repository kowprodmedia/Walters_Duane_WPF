//Duane Walters - 03.27.2014 - Functions - Personal

//anonymous function

function sticksUsed(){
	//setLength = prompt ("How long is your set?", "");
	var normalUse = prompt ("How many do you go through in an hour?", "");
	var setLength=prompt("Enter Your Set Length","Length In Hours");
	var pair = 2;
	var usedPairs = setLength * normalUse * 2;


var x;

//var setLength=prompt("Enter Your Set Length","Length In Hours");

if (setLength!=null)
  {
  x="You will use " + usedPairs + " pairs of sticks during your set tonight.";
  document.getElementById("usedPairs").innerHTML=x;
  }
}