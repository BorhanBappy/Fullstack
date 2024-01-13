- [01Basic](#01basic)
  - [String](#string)
    - [Write a JavaScript function to check whether an 'input' is a string or not.](#write-a-javascript-function-to-check-whether-an-input-is-a-string-or-not)
    - [. Write a JavaScript function to check whether a string is blank or not.](#-write-a-javascript-function-to-check-whether-a-string-is-blank-or-not)
    - [3. Write a JavaScript function to split a string and convert it into an array of words.](#3-write-a-javascript-function-to-split-a-string-and-convert-it-into-an-array-of-words)
    - [Write a JavaScript function to extract a specified number of characters from a string.](#write-a-javascript-function-to-extract-a-specified-number-of-characters-from-a-string)

# 01Basic

## String

```javascript
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
```

### Write a JavaScript function to check whether an 'input' is a string or not.

```javascript
function isString(input) {
  if (Object.prototype.toString.call(input) === "[object String]") return true;
  else return false;
}
console.log(isString.toString());
console.log(isString("w3resource")); // Output: false
console.log(isString([1, 2, 4, 0])); // Output: false
```

### . Write a JavaScript function to check whether a string is blank or not.

```javascript
function is_Blank(input) {
  if (input.length == 0) return true;
  else return false;
}
console.log(is_Blank("")); // Output: true
console.log(is_Blank([1, 2, 4, 0])); // Output: false
```

### 3. Write a JavaScript function to split a string and convert it into an array of words.

```javascript
function string_to_array(input) {
  const array = input.split(" "); // using split operation to convert string to array join used to convert array to string
  return array;
}
console.log(string_to_array("Robin Singh"));
```

### Write a JavaScript function to extract a specified number of characters from a string.

Test Data :

```javascript
function truncate_string(input, num) {
  const string = input.substring(0, num);
  return string;
}
console.log(truncate_string("Robin Singh", 5)); // Output Robin
```
