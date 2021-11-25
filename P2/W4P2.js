// JavaScript source code
var valueArray = [];
var counter = 0;
var input;

for (var i = 0; i < 10; i++) {
    //allows user to enter numbers 
    input = prompt("Please enter a value: ");
    //converts input to int and stores values in array
    valueArray.push(parseInt(input));
}

//function for determining the duplicates numbers
function amountDupNums(valueArray) {

    for (var i = 0; i < 10; i++) {
        for (var x = i + 1; x < 10; x++) {
            //If a duplicate of the element is found, 
            //incremnt amountOfDuplicNums
            if (valueArray[i] == valueArray[x]) {
                counter++;
                break;
            }
        }
    }
    return counter;
}

console.log("Amount of duplicate number = " + amountDupNums(valueArray));