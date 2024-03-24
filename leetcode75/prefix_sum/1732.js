/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
	let currentAlt = 0;
	let highest = 0;

	for (let i = 0; i < gain.length; i++) {
		currentAlt += gain[i];

		if (currentAlt >= highest) {
			highest = currentAlt;
		}
	}

	return highest;
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/
function test() {
    let gain = [-5,1,5,0,-7];
    console.log(largestAltitude(gain));

    gain = [-4,-3,-2,-1,4,3,2];
    console.log(largestAltitude(gain));
}

test();