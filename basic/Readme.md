# Given string reverse

```javascript
var str = "Bangladesh is Beautiful Country";
const strs = str.split(" ");
var savedstr = strs.map(function (word) {
  return word.split("").reverse().join("");
});
console.log(savedstr.join(" "));
const a = ["a", "b", "c"];
console.log(a.reverse().join(""));
```

# How to check if an object is an array or not Provide some code;

```javascript
const checkArray = (elem) => {
  return Array.isArray(elem);
};
console.log(checkArray([]));
console.log(checkArray({}));
```

# How to empty an array in JavaScript?

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 0;
console.log(array);
```

# Duplicate an Array.

```javascript
function duplicate(array) {
  return array.concat(array);
}
console.log(duplicate([1, 2, 3, 4]));
```

# Function

# Reverse a Integer

```javascript
var reverse = (num) => {
  return Number(num.toString().split("").reverse().join(""));
};
console.log(reverse(12));

var reverse = (num) => {
  rev = 0;
  while (num > 0) {
    var rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
};
console.log(reverse(12456));
```

# Write a JavaScript function that checks weather a passed string is palindrome or not

```javascript
var stringPalChecker = (str) => {
  var str1 = str.split("").reverse().join("");
  if (str === str1) {
    return console.log("Palindrome");
  } else {
    return console.log("Not Palindrome");
  }
};

stringPalChecker("Lool");
```

# Write a JavaScript function that returns a passed string with letters in alphabetical order

```javascript
let stringAlphaBeticalOrder = (str) => {
  return str.split("").sort();
};
console.log(stringAlphaBeticalOrder("bapapy"));
```

# Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase.

```javascript
let uppercase = (str) => {
  let s = str.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  console.log(s.join(" "));
};
uppercase("hello bappy how are you");
```

# Write a JavaScript function to get the number of occurrences of each letter in specified string.

```javascript
var occu = (str) => {
  var occurences = {};
  str.split("").forEach((element) => {
    if (occurences.hasOwnProperty(element) === false) {
      occurences[element] = 1;
    } else {
      occurences[element]++;
    }
  });
  return occurences;
};
console.log(occu("apple"));
```

# Loop

## Loop an array and add all members of it;

```javascript
var array = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;
array.forEach((ele) => {
  sum = sum + ele;
});
console.log(sum);
```
## In an array of numbers and strings, only add those members which are not strings.

```javascript

```