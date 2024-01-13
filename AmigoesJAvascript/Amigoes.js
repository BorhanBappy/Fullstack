var brand = "String";
console.log(typeof brand);
console.log(brand.length);

console.log(brand.toUpperCase()); // This is function thats why i used () after toUpperCase
console.log(brand.substring(0, 4)); // Expected output Stri
// subString is distinct character index wise
console.log(brand.substring(4, 6)); // Expected Output ng

console.log(brand.substring(5, 8));
// if you subString over array length expected output are space

var a = "Amigos";
var b = "code";

console.log(a + b); // Expected output Amigoscode

console.log(a + " " + b); // Expected output Amigos code;

console.log(`${a}  ${b.toUpperCase()}`); // Output Amigos CODE

function truncate_string(input,num) {
  const string = input.substring(0,num);
  return string;
}
console.log(truncate_string("Robin Singh", 5));// Output Robin

// // Object
// const name = {
//   f_name: "Abid",
//   age: 4,
// };

// console.log(name);
