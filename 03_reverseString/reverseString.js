const reverseString = function(string) {
    let length = string.length;
    let stringReversed = '';

    for (let i = 0; i<length; i++) {
        stringReversed += string.charAt(length-1-i);
    }

    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
