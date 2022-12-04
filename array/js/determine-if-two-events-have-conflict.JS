/** https://leetcode.com/problems/determine-if-two-events-have-conflict/

Determine if Two Events Have Conflict

You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

event1 = [startTime1, endTime1] and
event2 = [startTime2, endTime2].
Event times are valid 24 hours format in the form of HH:MM.

A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).

Return true if there is a conflict between two events. Otherwise, return false.

Test Case 1
Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
Output: true
Explanation: The two events intersect at time 2:00.

Test Case 2
Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
Output: true
Explanation: The two events intersect starting from 01:20 to 02:00.

Test Case 3
Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
Output: false
Explanation: The two events do not intersect.

Constraints:

evnet1.length == event2.length == 2.
event1[i].length == event2[i].length == 5
startTime1 <= endTime1
startTime2 <= endTime2
All the event times follow the HH:MM format.


 */

// Solution 1 

/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */

const toMins = t => {
    let bits = t.split(':');
    return bits[0] * 60 + bits[1] * 1;
}
const haveConflict = (event1, event2) => Math.max(toMins(event1[0]), toMins(event2[0])) <= Math.min(toMins(event1[1]), toMins(event2[1]));

console.log(haveConflict(["01:15", "02:00"], ["02:00", "03:00"])); // true

// Solution 2

const haveConflict2 = (event1, event2) => {
    let [startTime1, endTime1] = event1;
    let [startTime2, endTime2] = event2;

    startTime1 = parseInt(startTime1.replace(':', ''));
    startTime2 = parseInt(startTime2.replace(':', ''));
    endTime1 = parseInt(endTime1.replace(':', ''));
    endTime2 = parseInt(endTime2.replace(':', ''));

    if (startTime1 <= endTime2 && startTime2 <= endTime1) {
        return true
    }

    return false;
};

console.log(haveConflict2(["10:00", "11:00"], ["14:00", "15:00"])); // false