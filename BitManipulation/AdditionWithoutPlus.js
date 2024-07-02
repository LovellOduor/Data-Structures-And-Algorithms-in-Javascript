/*
use & to find carry bits and left shift them.
use xor to simulate addition

a = 1 b = 3

001
011

001

010
010

010
000

100

 */
function AdditionWithoutPlus(a,b){
    carryBits = 0;
    while(b){
        carryBits = a & b;
        a = a ^ b;
        b = carryBits << 1;
    }
    return a;
}

console.log(AdditionWithoutPlus(9,1111));


