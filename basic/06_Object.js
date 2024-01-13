// singleton

// object literals
const mySYm = Symbol("mykey1");

console.log(typeof mySYm); // Output: "symbol"

const JsUser = {
  name: "Bappy",
  "full nmae": "Borhan Uddin Bappy",
  [mySYm]: "key1",
  age: 27,
  location: "Banail",
  email: "Bappy@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.name); // Output: "Bappy"
console.log(JsUser["location"]);
console.log(JsUser["full nmae"]);
console.log(typeof JsUser[mySYm]);

console.log((JsUser.email = "Bappye@gmail.com"));

// Object.freeze(JsUser);

JsUser.email = "Hello@gmail.com";
// console.log(JsUser);

JsUser.greeting = () => "Hello Js User";
// JsUser.greeting();
console.log(JsUser.greeting());

JsUser.greetingTwo=()=>`Hello Js User ${JsUser.name}`
console.log(JsUser.greetingTwo());

console.log(JsUser.greeting); // Output: [Function(anonymous)]

