//Duane Walters 3.20.2014 - Conditionals Industry


//Gig Cost vs. Benefit

var cost = 100;
var ticketPrice = 10;
var crowd = 11;
var payment;


if(crowd * ticketPrice < cost) {
	console.log("No, don't take the gig.");
	document.write("No, don't take the gig.");
}else {
	console.log("Yes, take the gig.");
	document.write("Yes, take the gig.");
}

