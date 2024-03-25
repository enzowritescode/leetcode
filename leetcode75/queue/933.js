
var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);

    const timeWindow = 3000;

    // TODO
    return this.requests.length;  
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

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