/*
Given an integer n find each such that
a <= x <=n
n + x = n xor x

Tip:
when n is even
n xor x = 0
*/

function sumXor(num){
    // there is always at least one value that satisfies n + x = n xor x
    result = 1
    while (num){
        // check if num is currently even
        even = !(num & 1);
        if(even){
            result *= 2;
        }
        // Divide num by 2 because we only care for even number occurences
        num = num >> 1;
    }
    return result;
}

console.log(sumXor(5));