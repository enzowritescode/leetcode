/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
	return [
		findUnique(nums1, nums2),
		findUnique(nums2, nums1)
	];
};

let findUnique = function(presentIn, notPresentIn) {
	let distinctMap = new Map();

	// add numbers
	for (let i = 0; i < presentIn.length; i++) {
		let num = presentIn[i];

		distinctMap.set(num, true);
	}

	// delete if present
	for (let i = 0; i < notPresentIn.length; i++) {
		let num = notPresentIn[i];

		distinctMap.delete(num);
	}

	let distinct = [];
	for (const [key, value] of distinctMap) {
    	distinct.push(key);
	}

	return distinct;
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/
function test() {
    let nums1 = [1,2,3]
    let nums2 = [2,4,6];
    console.log(findDifference(nums1, nums2));

    nums1 = [1,2,3,3];
    nums2 = [1,1,2,2];
    console.log(findDifference(nums1, nums2));

    nums1 = [80,5,-20,33,26,29];
    nums2 = [-69,0,-36,52,-84,-34,-67,-100,80];
    console.log(findDifference(nums1, nums2));
}

test();