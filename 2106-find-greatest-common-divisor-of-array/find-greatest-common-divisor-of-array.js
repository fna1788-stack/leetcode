/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
  let minn=Math.min(...nums)
  let maxx=Math.max(...nums)
  let count=0
  for(let i=1;i<=minn;i++){
    if(minn%i===0&&maxx%i===0){
        count=i
    }
  }return count 
};