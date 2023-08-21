// var maybar= 0;
// if(maybar){
//     console.log("I am truthy")
// } else{
//     console.log("I am falsy")
// }
// var age = 8;
// // var type=(age>=18) ? "adult" : "Child"
// // var type = age >= 18 ? "adult" : age < 10 ? "child" : "Young";
// var type=age>6
// console.log(type);
// const personmethods = {
//   eat() {
//     console.log("Person is eating");
//   },
//   sleep() {
//     console.log("Person is sleeping");
//   },
// };

// function Person(name, age) {
//     let person = {};
//     person.name = name,
//     person.age = age,
//     person.eat = personmethods.eat(),
//     person.sleep = personmethods.sleep();

//   return person;
// }
// const sakib = Person("Sakib", 34);
// const Tamim = Person("Tamim", 36);
// console.log(sakib);
// const captin={
//     name:'Marshafi',
//     age:35
// };
// console.log(captin)
// const personmethods = {
//     eat() {
//       console.log("Person is eating");
//     },
//     sleep() {
//       return "Person is sleeping"
//     },
//   };

//   function Person(name, age) {
//     let person = Object.create(personmethods);
//     person.name = name,
//     person.age = age
//     return person
//   }

//   const sakib = Person("Sakib", 34);
//   const Tamim = Person("Tamim", 36);
//   console.log(sakib,sakib.sleep())

// function test(){

// }
// console.log(test)

function Person(name, age) {
  let person = {};
  person.name = name;
  person.age = age;
  person.eat = function () {
    console.log("Person is eating");
  };
  person.sleep = function () {
    console.log("Person is sleeping");
  };
  return person;
}
const sakib=Person('Bappy',35)
console.log(sakib)
sakib.sleep()