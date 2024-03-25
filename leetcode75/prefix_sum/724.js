/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rSum = nums.reduce(
        (acc, cur) => acc + cur,
        0
    );
    let lSum = 0;
    let prev = 0;

    for (let i = 0; i < nums.length; i++) {
        rSum -= nums[i];
        lSum += prev;

        if (lSum == rSum) {
            return i;
        }

        prev = nums[i];
    }
    
    return -1;
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/
function test() {
    let nums = [1,7,3,6,5,6];
    console.log(pivotIndex(nums));

    nums = [1,2,3];
    console.log(pivotIndex(nums));

    nums = [-1,-1,0,0,-1,-1];
    console.log(pivotIndex(nums))
}

test();