/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversed = [];
    let wordsArray = s.split(' ');

    for (let i = wordsArray.length - 1; i >=0; i--) {
        let word = wordsArray[i].trim();

        if (word.length) {
            reversed.push(word);
        }
    }
    
    return reversed.join(' ');
};