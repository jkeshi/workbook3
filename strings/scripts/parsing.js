"use script"

let fullName = "Craig Kaye";
let posOfSpace = fullName.indexOf(" ")
let start = 0
let firstName = fullName.substring(start,posOfSpace)
let lastName = fullName.substring(posOfSpace + 1);
console.log(`First name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
