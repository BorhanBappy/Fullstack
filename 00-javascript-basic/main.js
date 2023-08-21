// displayDate()
// // import {displayDate} from "./counter.js"
// function displayDate(){
//     document.getElementById('demo').innerHTML=Date()
// }
// let number = ()=>{
//     console.log(10)
// }
// number()
// let number = (a, b)=> a + b;

// console.log(`number is ${number(10,5)}`)

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName())
// let player=function(name){
//     console.log(name)
// }
// player("Sakib")

// var h=document.getElementById('Header');
// console.log(h)
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
  console.log(typeof(value))
})
console.log(text + "" + typeof(text))