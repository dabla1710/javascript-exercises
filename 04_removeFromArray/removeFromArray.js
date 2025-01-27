const removeFromArray = function(arr, ...args) {
    let newArr = [];

    // e is index, while arr[e] is the value
    for (e in arr) {
        console.log("e:", e);
        if (args.includes(arr[e])) {
            continue;
        } else {
            newArr.push(arr[e]); // newArr.push(e) does push the key which are the indices as string -> use arr[e]
        }
    }

    return newArr;
};


// const testArray = [1, 2, 3, 4];
// const testParam = 3;
// console.log(removeFromArray(testArray, testParam));

// Do not edit below this line
module.exports = removeFromArray;
