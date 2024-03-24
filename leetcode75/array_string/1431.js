/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let result = [];

    for (let i = 0; i < candies.length; i++) {
        let isGreater = (candies[i] + extraCandies >= max);

        result.push(isGreater);
    }

    return result;
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/

function test() {
    let candies = [2,3,5,1,3];
    let extra = 3;
    console.log(kidsWithCandies(candies, extra));
}

test();