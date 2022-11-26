/** https://leetcode.com/problems/defanging-an-ip-address/
 
Defanging an IP Address

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Test Case 1
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
 
Test Case 2
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"


Constraints:

The given address is a valid IPv4 address.

 */

// Solution 1

/**
 * @param {string} address
 * @return {string}
 */
// const defangIPaddr = address => address.replaceAll(".","[.]");

const defangIPaddr = address => address.split('.').join('[.]');

console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"

console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"