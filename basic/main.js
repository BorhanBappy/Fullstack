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

// function Person(name, age) {
//   let person = {};
//   person.name = name;
//   person.age = age;
//   person.eat = function () {
//     console.log("Person is eating");
//   };
//   person.sleep = function () {
//     console.log("Person is sleeping");
//   };
//   return person;
// }
// const sakib=Person('Bappy',35)
// console.log(sakib)
// sakib.sleep()

// var numbers = [1, 2, 3, 4, 5, 6];
// var result=numbers.find(function (currentValue) {
// return currentValue>4;
// });
// console.log(result)
// var numbers = [1, 2, 8, 4, 5, 6];
// var result = numbers.find(f);
// console.log(result);

// function find2(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     const found = callback(arr[i]);
//     if (found) {
//       return arr[i];
//     } else undefined;
//   }
// }
// function your(currentValue) {
//   return currentValue >= 5;
// }
// console.log(find2([1, 2, 3, 4, 5], your));

// const display = (some) => console.log(some);
// var calculator = (...args) => {
//   let sum = 0;
//   for (let i in args) {
//     sum += args[i];
//   }
//   display(sum);
// };
// calculator(10, 15, 5, 5, 5);

// function Sum() {
//   let sum = 0;
//   for (let i in arguments) {
//     sum += arguments[i];
//   }
//   console.log(sum);
// }
// Sum(20, 30, 14, 15, 60);
// const Sum = (...args) => {
//   let sum = 0;
//   for (let i in args) {
//     sum += args[i];
//   }
//   console.log(sum);
// };
// Sum(20, 30, 14, 15, 60);
// const takOrder = (customer, callback) => {
//   console.log(`Take Order for  ${customer}`);
//   callback(customer);
// };
// const processOrder = (customer, callback) => {
//   console.log(`Processing Order for  ${customer}`);

//   setTimeout(() => {
//     console.log("Cooking Completed");
//     console.log(`Order processed for  ${customer}`);
//     callback(customer);
//   }, 3000);
// };
// const orderCompleted = (customer) => {
//   console.log(`Completed Order for  ${customer}`);
// };
// takOrder("Customer 1", (customer) => {
//   processOrder(customer, (customer) => {
//     orderCompleted(customer);
//   });
// });

// const takeOrder = (customer, callback) => {
//   console.log(`Take order for ${customer} `);
//   callback(customer);
// };

// const processOrder = (customer, callback) => {
//   console.log(`Processing order for ${customer}`);
//   setTimeout(() => {
//     console.log(`Cooking Completed`);
//     console.log(`Order Processed for ${customer}`);
//     callback(customer);
//   }, 3000);
// };
// const completeOrder = (customer) => {
//   console.log(`Complete order for ${customer}`);
// };

// takeOrder("customer 1", (customer) => {
//   processOrder(customer, (customer) => {
//     completeOrder(customer);
//   });
// });

const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10.00 P.M",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled"));
  }
});
const addtocalndar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return calendar;
};
// meeting
//   .then(addtocalndar)
//   .then((res) => {
//     console.log(JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// console.log("hello");

async function myMeeting() {
  const meetingDetails = await meeting;
  const calendar = await addtocalndar(meetingDetails);
  console.log(calendar);
}
myMeeting();
// const promise1 = Promise.resolve(`Promise 1 resolved`);
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Promise 2 resolved`);
//   }, 3000);
// });
// // promise1.then((res) => console.log(res));
// // promise2.then((res) => console.log(res));
// Promise.race([promise1, promise2]).then((res) => console.log(res));

// async function friendlyFunction() {
//   return `Hello`;
// }
// console.log(friendlyFunction());
