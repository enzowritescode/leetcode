/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let string = '';

    let i = 0;
    let j = 0;

    while ((i < word1.length) || j < word2.length) {
        if (i < word1.length) {
            string += word1[i];
            i++;
        }

        if (j < word2.length) {
            string += word2[j];
            j++;
        }
    }

    return string;
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/

function test() {
    let word1 = 'abc';
    let word2 = 'pqr';
    console.log(mergeAlternately(word1, word2));

    word1 = 'ab';
    word2 = 'pqrs';
    console.log(mergeAlternately(word1, word2));

    word1 = 'abcd';
    word2 = 'pq';
    console.log(mergeAlternately(word1, word2));
}

test();