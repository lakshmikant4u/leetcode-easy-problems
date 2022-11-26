/** https://leetcode.com/problems/decode-the-message/

 Decode the Message

 You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

Test Case 1

Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
Output: "this is a secret"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".

Test Case 2

Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
Output: "the five boxing wizards jump quickly"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".

Constraints:

26 <= key.length <= 2000
key consists of lowercase English letters and ' '.
key contains every letter in the English alphabet ('a' to 'z') at least once.
1 <= message.length <= 2000
message consists of lowercase English letters and ' '.


*/


// Solution 1

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = (key, message, result = '', hash = new Map(), alpha = 'abcdefghijklmnopqrstuvwxyz') => {

    let keySet = Array.from(new Set(key.split(' ').join('')));
    for (let i = 0; i < alpha.length; i++) {
        hash.set(keySet[i], alpha[i])
    }

    for (let chr of message) {
        result += hash.get(chr) || ' '
    }

    return result
};

let key = "the quick brown fox jumps over the lazy dog";
let message = "vkbs bs t suepuv"
console.log(decodeMessage(key, message));

// Solution 2

const decodeMessage2 = (key, message) => {
    const table = [...key].reduce((a, c) => (a.includes(c) || c === " " ? a : [...a, c]), []);
    return [...message].reduce((a, c) => c === " " ? (a += " ") : (a += String.fromCharCode(table.findIndex((x) => x === c) + 97)), "");
};

let key2 = "eljuxhpwnyrdgtqkviszcfmabo"
let message2 = "zwx hnfx lqantp mnoeius ycgk vcnjrdb";
console.log(decodeMessage2(key2, message2));