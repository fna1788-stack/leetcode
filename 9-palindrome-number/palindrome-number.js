/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
let b =String(x)
reverse=""
for(i=b.length-1;i>=0;i--){
    reverse+=b[i]
    
}
if(reverse==b){
    return(true)
}
else{
        return(false)
}

};