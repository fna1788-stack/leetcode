/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let a=0
let count=0
for(let i=0;i<nums.length;i++){
 if(nums[i]%2==0){
    if(nums[i]%3==0){
    a+=nums[i]
    count++
  }
  }
} 
if(count===0){
    return 0
}
let out=Math.floor(a/count)
return out 
};