- [Javascript](#javascript)
  - [Javascript Basic](#javascript-basic)
    - [Way to see console log Javascript](#way-to-see-console-log-javascript)
    - [Variable Declare](#variable-declare)
    - [Data types](#data-types)
    - [Operators](#operators)
    - [Flow control](#flow-control)
      - [If-Else Method](#if-else-method)

## Installation

```bash
npm create vite@latest
npm run dev
00-javascript-basic
```
# Javascript
## Javascript Basic
### Way to see console log Javascript 
* First developer mode web and go to console
* Vs code terminal node then js file name.
### Variable Declare
``` javascript
console.log("Hello World Bappy")
let age =25
age=30
console.log(age)
const salary=2500
// salary=4000 : error found
// Constant value not change
console.log(salary)
var PI=3.14
console.log(PI)
```
### Data types
* Primitive
  * String type
  ```javascript 
  const name='Bappy'
  const language="Bangla"
  const channel=`code`
  console.log(name,language,channel)
  ```
  * Number type
  ```javascript 
  const total=0
  var PI=3.14
  ```
  * Boolean type
   ```javascript 
  const isPrimaryNumber = true
  const isNewUser= false
  ```
  * Undefined type
   ```javascript 
  let result
  console.log(result)
  const res=undefined
  ```
  * Null type
   ```javascript 
  const res =null
  ```
  * Bigint type
   ```javascript 
  console.log(2 ** 53-1)
  console.log(Number.MAX_SAFE_INTEGER)

  let x=Number.MAX_SAFE_INTEGER

  console.log(x+1)
  console.log(x+10)
  // create a bigint number
  let xy= 211111111111111111n
  console.log(typeof(xy))
  // BigInt operation 
  let ab=10n
  let bc=20n
  console.log(ab+bc)
  console.log(bc-ab)
  // console.log(10+20n) not correct 
  ```
  * Symbol type
   ```javascript 
  
  ```
* Non primitive
  * Object
  ```javascript 
  var person={

      firstName:'Borhan Uddin',
      lastName:'Bappy',
      age:26
  }
  console.log(person['lastName'])
  person["mobileNumber"] = 1521788394// add value an object
  console.log(person)

  // array
  const oddNumbers=[1,3,5,7,9]
  console.log(oddNumbers[0])// first Element of array

  let a=10
  a='Bappy'
  a=true
  console.log(a)// Javascript last element show
  ```
### Operators
* Assignment operators
  
* Arithmetic Operators
* Comparison Operators
* Logical Operators
* String Operators
* Other Operators
### Flow control
#### If-Else Method