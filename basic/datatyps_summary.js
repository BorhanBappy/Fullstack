let myYoutubeName = "hithishchaoudharydotcom";
let anotherName = myYoutubeName;

anotherName = "chaorcode";

console.log(myYoutubeName);
console.log(anotherName);

let user = {
  email: "user@google.com",
  upi: 12345,
};

let userTwo = user;
userTwo.email = "userTwo@gmail.com";

console.log(userTwo);
console.log(user);

const array = [1, 2, 5, 4, 6];
let array2 = array;
array2.push(6);

console.log(array2);
console.log(array);

const array3 = array.map((item) => item);
console.log(array3);
array3.push(9);

console.log(array3);
console.log(array2);
console.log(array);

let array4 = [];
for (let index = 0; index < array3.length; index++) {
  array4.push(array3[index]);
}

console.log(array4);
array4.push(10);

console.log(array4);
console.log(array);
console.log(array2);
console.log(array3);

let object = {
  key1: "Value1",
  key2: "Value2",
};
let copyObject = object ;
copyObject.key3 = "value3";

console.log(copyObject);
console.log(object);

function originalFunction() {
    console.log('This is the original function.');
}

// Create a new function with the same implementation
let copiedFunction = function() {
    console.log('This is the copied function.');
};


function originalFunction() {
    console.log('This is the original function.');
}

// Modify the function by reassigning
originalFunction = function() {
    console.log('This is the modified function.');
};

// Now, calling originalFunction will execute the modified implementation
originalFunction();
