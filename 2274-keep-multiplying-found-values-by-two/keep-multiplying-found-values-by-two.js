/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
       let a = original
       while(true){
        let found=false
        for(let i=0;i<nums.length;i++){
            if(nums[i]==a){
                a=a*2
                found=true
                break
            }
            
        }
        if(found===false){
                return a
            }
       }
};