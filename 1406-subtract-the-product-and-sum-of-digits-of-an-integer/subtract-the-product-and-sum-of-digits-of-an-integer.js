/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n=n.toString()
    let sum=0
    let mul=1
    let result=0
    for(let i=0;i<n.length;i++){
        sum+=Number(n[i])
        mul*=Number(n[i])
    }
    return result=mul-sum
};