const fibonacci = function(nthInputFibo) {
    nthFibo = Number(nthInputFibo);
    if (nthFibo < 0) return ("OOPS");
    if (nthFibo == 0) return 0;
    if (nthFibo <= 2) return 1;

    let currentFibo = 0
    let bevorLastItem = 0;
    let lastItem = 1;

    for (let i = 2; i <= nthFibo; i++) {
        currentFibo = lastItem + bevorLastItem;
        bevorLastItem = lastItem;
        lastItem = currentFibo;
    }

    return currentFibo;

};

// Do not edit below this line
module.exports = fibonacci;
