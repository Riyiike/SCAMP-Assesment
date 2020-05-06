/* Fibonacci Sequence is the series of numbers : 0,1,1,2,3,5,8,13,21,34....
Each subsequent number is the sum of the previous two...
using [0,1] = 1
*/

function fib(result, len) {
    let num1 = result[0],
        num2 = result[1],
        next, //number that comes next in the sequence 
        count = 2; //count how many numbers in the sequence

    while (count < len) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        result.push(next);
        count++; //increment count to keep track
    }
    return result;
};
console.log(fib([0, 1], 15));