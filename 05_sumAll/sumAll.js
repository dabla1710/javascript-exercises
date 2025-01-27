const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if (start < 0 || end < 0) return "ERROR";
    if ( start > end ) {
        const temp = end;
        end = start;
        start = temp;
    }
    let sum = 0;
    for (let i = start; i <= end; i++ ) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
