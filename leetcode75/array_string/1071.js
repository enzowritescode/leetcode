/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let divisor = '';
    let longestDivisor = '';

    for (let i = 0; i < str1.length; i++) {
        divisor += str1[i];

        if (
            str1.length % divisor.length != 0 ||
            str2.length % divisor.length != 0
        ) {
            continue;
        }

        if (
            isContinuousSubstr(str1, divisor) &&
            isContinuousSubstr(str2, divisor))
        {
            longestDivisor = divisor;
        }
    }

    return longestDivisor;
};

let isContinuousSubstr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i+= needle.length) {
        substr = haystack.substr(i, needle.length);

        if (substr != needle) {
            return false;
        }
    }

    return true;
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/

function test() {
    let str1 = 'ABABAB';
    let str2 = 'ABAB';
    console.log(gcdOfStrings(str1, str2));

    str1 = 'ABCABC';
    str2 = 'ABC';
    console.log(gcdOfStrings(str1, str2));

    str1 = 'LEET';
    str2 = 'CODE';
    console.log(gcdOfStrings(str1, str2));

    str1 = 'ABCDEF';
    str2 = 'ABC';
    console.log(gcdOfStrings(str1, str2));

    str1 = 'TAUXXTAUXXTAUXXTAUXXTAUXX';
    str2 = 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX';
    console.log(gcdOfStrings(str1, str2));
}