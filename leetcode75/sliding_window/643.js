/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
	// calculate initial sum and average
	let sum = 0;
	for (let i = 0; i < k; i++) {
		sum += nums[i];
	}
	let maxAvg = sum/k;

	// sliding window
	for (let i = 0; i < nums.length - k; i++) {
		sum += nums[i+k] - nums[i];
		let avg = sum/k;

		if (avg > maxAvg) {
			maxAvg = avg;
		}
	}

	return maxAvg;
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/
function test() {
    let nums = [1,12,-5,-6,50,3]
    let k = 4;
    console.log(findMaxAverage(nums, k));

    nums = [5]
    k = 1;
    console.log(findMaxAverage(nums, k));

    nums = [4,0,4,3,3];
    k = 5;
    console.log(findMaxAverage(nums, k));
}

test();