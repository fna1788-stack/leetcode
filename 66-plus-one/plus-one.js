/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    let a = digits.length;

    for(let i = a-1; i >= 0; i--) {
        if(digits[i] == 9) {
            digits[i] = 0;
        }
        else {
            digits[i] = digits[i] + 1;
            return digits;
        }
    }

    digits.unshift(1);
    return digits;
};
