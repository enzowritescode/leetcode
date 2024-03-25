/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
	// map number to num occurrences
	let map = new Map();
	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		const val = map.get(num) || 0;

		map.set(num, val + 1);
	}

	// use set for num occurences
	let set = new Set();
	for (const [key, val] of map) {
		if (set.has(val)) {
			return false;
		}
		
		set.add(val);
	}

	return true;
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/
function test() {
    let arr = [1,2,2,1,1,3];
    console.log(uniqueOccurrences(arr));

    arr = [1,2];
    console.log(uniqueOccurrences(arr));

    arr = [-3,0,1,-3,1,1,1,-3,10,0];
    console.log(uniqueOccurrences(arr));
}

test();