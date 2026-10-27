/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
   
let b = 0;
let c = [];

for (let i = 0; i < nums.length; i++) {
    b = nums[i] + b;
    c.push(b);
    
}
return c 

};