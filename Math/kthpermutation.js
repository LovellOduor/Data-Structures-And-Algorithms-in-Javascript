/*
K-th Permutation 
This problem requires us to find the k-th permutation for a given sequence of digits
for example: n = 4; k = 16;
Meaning we find the 16th permutation index 15 from digits [1,2,3,4]
Steps:

1. Find the no. of permutations for n! which will be 4! = 24

2. divide 24 by 4 = 6 to find the length of each part of the permutation.
   a part of the the permutation contains digits starting with the same number.
   for example parts starting with 1 2 3 4
   partLength = n!/n = 24/4 = 6
   n = 4, k = 16, partLength = 6
   permutation = k / partLength = 15 / 6 = 2 
   index 2 has digit 3 = [3]

3. Since we have 6 parts we can find where the first digit our permutation lies
   15/6 = 2 meaning our first digit lies in index 2 or is the 3rd digit of our numbers array which
   is 3.
   new k will be searching in the part old k % partLength = 15 % 6 = 3
   new k = 15 % 6 = 3 


4. We now remove 3 from our numbers array and remain with [1,2,4] therefore n becomes
   3. Since we have 6 elements in this part we can get the new part length by dividing the 
   no. of elements 6 by n (3) = 2 our new part length.
   partLength = n!/n = 3!/3 = 6/3 = 2
   n = 3, k = 3, partLength = 2 
   the next digit in the permutation is calculated by
   finding the modulus of k by the partlength = k / partLength = 3 / 2 = 1
   index 1 has the digit 2
   [3,2] 
   new k will be searching in the part old k % partLength = 3 % 2 = 1
   new k = 3 % 2 = 1

5. We then re-adjust n = 2 because our new numbers array = [1,4]. 
   partLength = n!/n = 2/2 = 1 
   n = 2, k = 1, partLength = 1
   next digit in permutation = k % partLength = 1/1 = 1
   index 1 has digit 4
   [3,2,4]
   new k will be searching in the part old k % partLength = 1 % 1 = 0
   new k = 1 % 1 = 0

6. We then re-adjust n = 1 because our new numbers array = [1]. 
   partLength = n!/n = 1/1 = 1 
   n = 1, k = 0, partLength = 1
   next digit in permutation = k % partLength = 0/1 = 0
   index 0 has digit 1
   [3,2,4,1]

   Therefore the permutation is 3241
*/

function kthPermutation(n,k){
   // reduce k by one because we are calculating based on a zero index so
   // kth 16 will be at index 15
   k = k -1;
   const nums = [];
   const factorials = [];
   for(let i=1;i<=n;i++) {
      nums.push(i);
      if(i>1){
         factorials.push(i*factorials[i-2]);
      }else{
         factorials.push(i);
      }
   }
  var result = "";

 while(nums.length>0){
   n = nums.length;
   // partLength = n!/n
   var partLength = factorials[n-1]/n;
   // permutation = k/partLength this will be the index of the digit in the permutation
   var permutation = Math.trunc(k/partLength);
   // store the digit that was identified based on it's permutation index
   result += nums[permutation];
   // We then remove the digit from the nums array as it's position has been identified.
   nums.splice(permutation,1);
   // We calculate the new K = old k % partLength
   k = k % partLength;
}

   return result;
}

const result = kthPermutation(4,16);
console.log(result);