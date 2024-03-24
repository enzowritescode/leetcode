/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let startI = 0;
    let endI = s.length - 1;
    let stringArray = s.split('');

    while (startI < stringArray.length && startI < endI) {
        let start = stringArray[startI];        

        if (isVowel(start)) {

            while (endI != startI) {
                let end = stringArray[endI];

                if (isVowel(end)) {
                    let temp = start;
                    stringArray[startI] = end;
                    stringArray[endI] = temp;
                    endI--;
                    break;
                } else {
                    endI--;
                }
            }
        }

        startI++;
    }

    return stringArray.join('');
};

var isVowel = function(char) {
    return char == 'a' || 
           char == 'A' ||
           char == 'e' ||
           char == 'E' ||
           char == 'i' ||
           char == 'I' ||
           char == 'o' ||
           char == 'O' ||
           char == 'u' ||
           char == 'U';
};