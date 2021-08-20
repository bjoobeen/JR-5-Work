// I.O.C.E

//I = Input
//O = Output
//C = Constraints
//E = Edge Case

//Create a function that takes a single integer as it's argument and returns true if evenly divisible by 3
//divide the integer by 3 and check if their is a remainder using the % operator
//if there is no remainder then the statement is true
//if there is a remainder then the statement is false

function div3Function(integer) {
    if (integer % 3 === 0) {
        return "True";
    }
    else (integer % 3 != 0) {
        return "False";
    }
}
var integer = 6;
console.log(div3Function(integer));