//Duane Walters - 03.13.2014 - Industry


//How many pixels are in a 1080p movie?
var width = 1920;
var height = 1080;

var result = 1920 * 1080 + "px in 1080p film";
console.log(result);

//Simple form information

var firstName = "Duane";
var lastName = "Walters";

var nameResult = lastName + ", " + firstName;

var phoneArea = "765";
var phoneFirstThree = "653";
var phoneLastFour = "8372";

var phoneNo = "(" + String(phoneArea) + ")" + String(phoneFirstThree) + "-" + String(phoneLastFour);

var houseAddressNumber = "83";
var streetName = "Elm Street";
var city = "Kentzville";
var state = "Florida";
var zip = "83921";

var addressResult = houseAddressNumber + " " + streetName;
var cityStateResult = city + ", " + state + " " + zip;

console.log(nameResult);
console.log(phoneNo);
console.log(addressResult);
console.log(cityStateResult);
