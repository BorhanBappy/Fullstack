
// function reverseNumber(n){
//     console.log(typeof(n))
//     n=String(n);
//     console.log(typeof(n))
//     return n.split("").reverse().join("");

// }
// console.log(Number(reverseNumber(32243)))
// console.log('1000'.split(""))

function palandrome(n){
    let a=String(n);
    let b= a.split("").reverse().join("");
    if(a==b){
        return (a + " is Palindrome")
    }
    else{
        return (a + " is not Palindrome")
    }
}
 
console.log (palandrome(1000101))
