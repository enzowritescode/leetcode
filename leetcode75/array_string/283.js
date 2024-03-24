/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length <= 1) {
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {

            for (let j = i; j < nums.length; j++) {
                if (nums[j] != 0) {
                    nums[i] = nums[j];
                    nums[j] = 0;
                    break;
                }
            }
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

    [4,2,4,0,0,3,0,5,1,0]
    [4,2,4,3,0,0,0,5,1,0]
    moveZeroes(nums);
    console.log(nums);
}

test();