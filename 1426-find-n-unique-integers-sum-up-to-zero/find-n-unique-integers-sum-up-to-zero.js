/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let array=[]
    for(let i=1;i<=Math.floor(n/2);i++){
        array.push(i)
        array.push(-i)
    }
    if(n%2!==0){
        array.push(0)
    }
    return array
};