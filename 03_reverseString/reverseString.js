const reverseString = function(string) {
    let reversedStrArray = [];
    for (let i = string.length-1; i >= 0; i--) {
        reversedStrArray.push(string[i]);
    }
    let returnString = reversedStrArray.join('');
    return returnString;
};

// console.log(reverseString("Hello World"));

// Do not edit below this line
module.exports = reverseString;
