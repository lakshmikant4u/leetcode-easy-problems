/** https://leetcode.com/problems/can-place-flowers/

Can Place Flowers

You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's,
where 0 means empty and 1 means not empty, and an integer n, return if n new flowers
can be planted in the flowerbed without violating the no-adjacent-flowers rule.

Test Case 1
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Test Case 2
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

 */

// Solution 1
const canPlaceFlowers = (flowerbed, n) => {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) continue;

        if (
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1;
            n--;
        }
    }

    return n <= 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true