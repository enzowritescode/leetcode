/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	let queue = [];
	while (head !== null) {
		queue.push(head);

		head = head.next;
	}

	let reversed = null;
	let cur;
	while (queue.length > 0) {
		let tmp = queue.pop();

		if (reversed == null) {
			reversed = tmp;
		} else {
			if (tmp) {
				cur.next = tmp;
			} else {
				cur.next = null;
			}
		}

		cur = tmp;
	}

	if (cur) {
		cur.next = null;
	}

	return reversed;
};

/*---------- TESTING AND DEBBUGING CODE BELOW ----------*/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function init1() {
	let five = new ListNode(5, null);
	let four = new ListNode(4, five);
	let three = new ListNode(3, four);
	let two = new ListNode(2, three);
	let one = new ListNode(1, two);

	return one;
}

function test() {
    let head1 = init1();
    console.log(reverseList(head1));
}

test();