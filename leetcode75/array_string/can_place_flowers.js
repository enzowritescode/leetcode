/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let countOdds = 0;
    let countEvens = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if ((i % 2 == 0) && canPlant(i, flowerbed)) {
            countEvens++;
        } else if (canPlant(i, flowerbed)) {
            countOdds++;
        }
    }

    return (countOdds >= n || countEvens >= n);
};

let canPlant = function(i, flowerbed) {
    if (flowerbed[i]) {
        // already planted
        return false;   
    }

    if (i == 0) {
        // first spot

        if (flowerbed.length == 1) {
            return true;
        }

        if (!flowerbed[i+1]) {
            return true;
        }
    } else if (i == flowerbed.length - 1) {
        // last spot
        if (!flowerbed[i-1]) {
            return true;
        }
    } else {
        // middle spots
        if (!flowerbed[i-1] && !flowerbed[i+1]) {
            return true;
        }
    }

    return false;
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/

function test() {
    let flowerbed = [1,0,0,0,1];
    let n = 1;
    console.log(canPlaceFlowers(flowerbed, n));

    flowerbed = [1,0,0,0,1];
    n = 2;
    console.log(canPlaceFlowers(flowerbed, n));
}

test();