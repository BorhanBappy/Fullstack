// console.log("Hello World Bappy")
// let age =25
// age=30
// console.log(age)
// const salary=2500
// // salary=4000
// // Constant value not change
// console.log(salary)
// const name='Bappy'
// const language="Bangla"
// const channel=`code`

// const total=0
// var PI=3.14
// console.log(PI)
// const isPrimaryNumber = true
// const isNewUser= false

// let result
// console.log(result)
// const res=undefined

// var person={

//     firstName:'Borhan Uddin',
//     lastName:'Bappy',
//     age:26
// }
// console.log(person['lastName'])
// add value an object
// person["mobileNumber"] = 1521788394
// person.village="Banail"
// console.log(person)
// // delete element from object
// delete person.lastName
// console.log(person)
// // empty Object create
// var student = {}
// student.name="bappy"
// console.log(student)

// array
// const oddNumbers=[1,3,5,7,9]
// console.log(oddNumbers[0])// first Element of array

// let a=10
// a='Bappy'
// a=true
// console.log(a)// Javascript last element show
// var array

// console.log(2 ** 53-1)
// console.log(Number.MAX_SAFE_INTEGER)

// let x=Number.MAX_SAFE_INTEGER

// console.log(x+1)
// console.log(x+10)
// // create a bigint number
// let xy= 211111111111111111n
// console.log(typeof(xy))
// // BigInt operation
// let ab=10n
// let bc=20n
// console.log(ab+bc)
// console.log(bc-ab)
// // console.log(10+20n) not correct

// let x=10
// let y=20
// console.log(x+y)
// console.log(x%y)
// console.log(10 ** 10)// ** means power
// console.log(5/3)
// console.log(25/4)
// console.log(x/y)
// let x=7

// var brand ="Amigoscode"
// console.log(typeof brand)
// console.log(brand.toUpperCase())
// console.log(brand.substring(0, 6))
// var a="Amigos"
// var b="code"
// console.log(a+" "+b)
// console.log(`${a} ${b.toUpperCase(0,2)}`)
// console.log(a.charAt(5))
// console.log(a[5])
// function areEqualCaseInsensitive(str1, str2) {
//     if(str1.toUpperCase() === str2.toUpperCase())
//     return str2
//     else
//     return false
//   }

// var a=areEqualCaseInsensitive("Bappy","bappy")
// console.log(a)
// var person={

//     firstName:'Borhan Uddin',
//     lastName:'Bappy',
//     age:26,
//     address:{
//         Village:"Banail",
//         District:"Tangail",
//         dob:new Date(2000,1,25).toJSON()
//     }
// }
// console.log(person['lastName'])
// person["mobileNumber"] = 1521788394// add value an object
// console.log(person.lastName)
// console.log(person.address.dob)

// var fassion={
//     shirt:{
//         tshirt1:"blakband",
//         tshirt2:"whiteband"
//     }
// }
// console.log(fassion.shirt.tshirt1)
// // Booleans
// var isAdults =false
// console.log(isAdults)
// if(isAdults){
//     console.log("is adults")
// }
// else{
//     console.log("is not adults")
// }
//  Arrays dicleartion
// var name=["Borhan",
//                 "Shoab",
//                 "Sharukh",
//                 "Shanto"
// ];
// // Print the Arrays
// console.log(name)
// // Print the Arrays index wise
// console.log(name[0])
// console.log("index 0-"+name[0])
// console.log("index 1-"+name[1])
// console.log("index 2-"+name[2])
// console.log("index 3-"+name[3])
// console.log("index 4-"+name[4])
// //  New Value add in Array.
// name.append=("Bappy")

// console.log(name)
// name.delete=("Bappy")
// console.log(name)
// console.log(name)
// //
// var years=[5,5]
// console.log(years[0] !== years[1]);
// years[5] = "mango";
// console.log(years)
// console.log(Object.keys(years))
// //  concat two array
// const array1=["a","b","c","d"];
// const array2=["e","f","g","h"];
// const array3=array1.concat(array2);
// console.log(array3)
// const letters=['a','b','c']
// const lettersNumber =letters.concat(1,[2,3])
// console.log(lettersNumber)

// const num1 = [[1]];
// const num2 = [2, [3]];

// const numbers = num1.concat(num2);

// console.log(numbers);
// // results in [[1], 2, [3]]
// // modify the first element of num1
// num1[0].push(4);
// console.log(num2[2])
// // push array
// num2.push("9")
// console.log(numbers);
// // results in [[1, 4], 2, [3]]

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0,'Feb');
// // Inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]
// months.splice(4, 1);
// // Delete 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April"]
// months.splice(4,0,'May')
// // Inserts at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]

//  Function
// function addumbers(number1,number2){
// var addition =number1+number2;
// console.log(addition);
// }
// addumbers(4,8);
// addumbers(8,9);
//  Function call with return value
// function addtwonumbers(number1,number2){
// var addition =number1+number2;
// return addition
// }
// var res1=addtwonumbers(4,8);
// var res2=addtwonumbers(8,9);
// console.log(res1,res2)
// // Built in function
// var person={
//     name:'Shoab',
//     age:23
// }
// console.log(Object.values(person))
// console.log(Object.keys(person))
// console.log("shoab".toLowerCase())
// console.log("shoab".toUpperCase())
// //  Here b find index 4
// console.log("shoab".indexOf("b"))
// console.log("shoab".indexOf("a"))
//  Loops
// var names=[
//     'Shoab',
//     'Borhan',
//     'Sharukh',
//     'Ariful'
// ]
// console.log("fori")
// for(var i=0;i<names.length;i++){
//     console.log(names[i])
// }

// console.log("")
// console.log("for of")
// // for (const iterator of object) {

// // }
// for (const name of names) {
//     console.log(name)
// }
// console.log("")
// console.log("forEach")
// // array.forEach(element => {

// // });

// names.forEach(function(name) {
//     console.log(name)
// });
// console.log("")
// console.log("For loop ")
// for (let index = 0; index < names.length; index++) {
//     const element = names[index];
//     console.log(element)
// }

// // while(true){
// //     console.log("hello")
// // }
// var number =0;
// while (number<5){
//     console.log(number);
//     number=number+1
// }
// var condition=true
// while(condition){
//     console.log('Hello')
//     condition=false
// }
// var index=0
// while(index<names.length){// condition
//     console.log(names[index])
//     index=index+1
// }

// do{
//     console.log("hello")
// }while(false)

// for(var a=0;a<=10;a++){
//     console.log(a);
//     if(a==5){
//         break;
//     }
// }
// for(var a=0;a<=10;a++){
//     if(a==5){
//         continue;
//     }
//     console.log(a);

// }

// for(var i=1;i<9;i++){
//     console.log(i++)
//     // console.log(i)
//     // console.log(++i)

// }
// numeric string used with + gives string type
// let result;

// result = '3' + 2;
// console.log(result) // "32"
// console.log(typeof(result))
// // Note: Here Number is automatically convert String
// result = '3' + true;
// console.log(result); // "3true"
// // Note: Here boolean is automatically convert String because first word are

// result = '3' + undefined;
// console.log(result); // "3undefined"
// // Note: Here keywords is automatically convert String because first word are
// result = '3' + null;
// console.log(result); // "3null"

// numeric string used with - , / , * results number type

// let result;

// result = '4' - '2';
// console.log(result); // 2
// // String automatically convert  integer
// result = '4' - 2;
// console.log(result); // 2

// result = '4' * 2;
// console.log(result); // 8

// result = '4' / 2;
// console.log(result); // 2

// var result= "5"
// var b=(Number(result))
// console.log(typeof(b))
// let greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//     greeter = "say Hello instead";
// }

// console.log(greeter) // "say Hello instead"
// var g='say';
// var g = "say hello"
// console.log(g); // greeter is undefined
var result;

// string to number
// result = Number('324');
// console.log(result); // 324
// In JavaScript, empty strings and null values return 0. For example,
// var result;
// result = Number(null);
// console.log(result);  // 0

// // If a string is an invalid number, the result will be NaN. For example,

// var result = Number('hello');
// console.log(result); // NaN
// // You can also generate numbers from strings using parseInt(),
// // parseFloat(), unary operator + and Math.floor(). For example,
//  result;
// result = parseInt('20.01');
// console.log(result); // 20

// result = parseFloat('20.01');
// console.log(result); // 20.01

// result = +'20.01';
// console.log(result); // 20.01

// result = Math.floor('20.01');
// console.log(result); // 20
// https://www.programiz.com/javascript/type-conversion link
// The right way to create variables
// var i
// for( i=0;i<=10;i++){
//     console.log(i)
// }
// console.log("value of outside "+i)
// // let
// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }
// console.log("value of outside block"+index)
// find the error of the console because let not allow out of the block
// for(var i=0;i<10;i++){
//     console.log(i)
//     if(i==5){
//         break;
//     }
// }
// i=0
// while(i<5){
//     console.log(i)
//     if(i==5){
// break;
//     }
//     i=i+1
// }
// console.log(10!==10)
// var i=0
// while(i<5){

//     i++;
//   if(i==2){
//         continue;
//     }
//     console.log(i)
// }

// for(var i=0;i<5;i++){
//     if(i==2){
//         break;
//     }
//     console.log(i)
// }
// const name='Bappy'
//   const language="Bangla"
//   const channel=`code`
//   console.log(name,language,channel)
// var brand ="Amigoscode"
// console.log(typeof brand)
// console.log(brand.toUpperCase())
// console.log(brand.substring(0, 6))
// var a="Amigos"
// var b="code"
// console.log(a+" "+b)
// console.log(`${a} ${b.toUpperCase(0,2)}`)
// console.log(a.charAt(5))
// console.log(a[5])
// function areEqualCaseInsensitive(str1, str2) {
//     if(str1.toUpperCase() === str2.toUpperCase())
//     return str1
//     else
//     return false
//   }

// console.log(areEqualCaseInsensitive("Bappy","bappy")
// )
var person = {
  firstname: 'Borhan',
  age: 21,
  isMale: true,
  balance: 100.0,
  dob: new Date(2000, 1, 28).toJSON(),
  address: { vill: 'Banail',
                city: 'tangail' 
              }
}
console.log(person)
console.log(person.age)