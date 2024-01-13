// var c=300;
let a = 100;
const b = 400;

if (true) {
  let a = 10;
  console.log(`Inner let value is ${a}`);
  // Expected output is 10
  // console.log(b);
  const b = 20;
  var c = 30;
  a = 500;
  // b is const that`s why b is not modify and not declare
  // b=600
  // console.log(`Inner const value is ${b}`);
  // Output is 20
  // console.log(`Inner let modify value is ${a}`);
  // Expected Output is 500
}

// console.log(a);
// Here b is not declare because that b declare block label
// console.log(b);
// Expected Value is 400
// console.log(c);

function One() {
  const userName = "Bappy";
  function Two() {
    const website = "Youtube";
    console.log(userName);
    // Expected output is Youtube
  }
  // here Inner function not working outer function

  // console.log(website)
  Two();
}
One();

const userName = "Bappy";

function three() {
  console.log(userName);
}
three();

if (true) {
  // console.log(userName);
  const userName = "Borhan Uddin";
  console.log(userName);
}
