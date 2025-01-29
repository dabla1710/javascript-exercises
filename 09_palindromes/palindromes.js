const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanWord = word.trim().toLowerCase().split("").filter((char) => alphanumerical.includes(char)).join("");
    const reversedWord = cleanWord.split("").reverse().join("");

    console.log(cleanWord);
    console.log(reversedWord);
    return (cleanWord == reversedWord);
};

// Do not edit below this line
module.exports = palindromes;

const testStr = "test,, my words";
palindromes(testStr);
