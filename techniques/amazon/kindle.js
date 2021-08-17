/*
Kindle Direct Publishing, Amazon's e-book selfpublishing platform, is working on a new feature to help authors use
special text characters in different ways. They have asked for your help in beta testing a new part of the feature involving
round and square brackets. Given a string that consists of characters (, ), [, ) and ?, determine how many ways it can be split
into two non-empty substrings such that the characters in each substring can be rearranged into a balanced string.
A sequence of round and square brackets can be rearranged into a balanced sequence if and only if the number of opened and closed
bracket is equal for both types of the brackets. The question marks can take the place of any needed character,
and the substrings together must contain the entire string.

Note: A substring is a contiguous group of characters in a string.
Sample Case 1
Sample Input For Custom Testing
STDIN
Function
– – – – –
(((?

s = '(((?'
Sample Output
Explanation s = (((?
There are 3 splits into two non-empty substrings:
(and (? 2.(( and (? 3.((( and ?
None has two balanced substrings.
 */

//greedy
/*
https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/
https://stackoverflow.com/questions/56500343/maximum-number-of-meetings-that-we-can-conduct/56502047#56502047
https://leetcode.com/problems/task-scheduler/
 */