//Duane Walters - 03.13.2014 - Expressions Worksheet



//Dog Years

var age = "3";
var dogYears = "7";

var result = age * dogYears;
console.log(result);



//Slice of Pie part 1

var slices = "12";
var people = "36";
var pizzasOrdered = "5";

var result = slices * pizzasOrdered / people;
console.log(result);



//Slice of Pie part 2

var slices = "12";
var people = "36";
var pizzasOrdered = "5";

var result = slices % pizzasOrdered;
console.log(result);



//Average Shopping Bill

var groceryBill = [123, 75, 147, 131, 223];

var average = (groceryBill[0] + groceryBill[1] + groceryBill[2] + groceryBill[3] + groceryBill[4])/5;
console.log(average);




//Discounts

var origPrice = 25;
var discount = 0.10;
var salesTax = 0.07;

var result = [origPrice * discount] + origPrice * salesTax + origPrice;
console.log(result);
