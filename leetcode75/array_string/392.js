/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
	if (s.length == 0) {
		return true;
	}

	let j = 0;
	for (let i = 0; i < t.length; i++) {
		if (t[i] == s[j]) {
			j++;

			if (j == s.length) {
				return true;
			}
		}
	}

	return false;
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/

function test() {
    let s = 'abc';
    let t = 'ahbgdc'
    console.log(isSubsequence(s, t));

    s = 'axc';
    t = 'ahbgdc';
    console.log(isSubsequence(s, t));

    s = 'b';
    t = 'c';
    console.log(isSubsequence(s, t));

    s = 'abc';
    t = 'acb';
    console.log(isSubsequence(s, t));
}

test();