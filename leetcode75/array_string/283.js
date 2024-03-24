/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r]) {
            // [nums[l], nums[r]] = [nums[r], nums[l]];
            // l++;

            let tmp = nums[r];
            nums[r] = nums[l];
            nums[l] = tmp;
            l++;
        }
    }
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/

function test() {
    let nums = [1,0,0,0,1];
    moveZeroes(nums);
    console.log(nums);

    nums = [0];
    moveZeroes(nums);
    console.log(nums);

    nums = [1];
    moveZeroes(nums);
    console.log(nums);

    nums = [0,1,0,3,12];
    moveZeroes(nums);
    console.log(nums);

    nums = [4,2,4,0,0,3,0,5,1,0];
    moveZeroes(nums);
    console.log(nums);
}

test();