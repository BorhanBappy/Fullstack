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
// //  Arrays
// var name=["Borhan",
//                 "Shoab",
//                 "Sharukh",
//                 "Shanto"
// ];
// console.log(name)
// console.log(name[0])
// console.log("index 0-"+name[0])
// console.log("index 1-"+name[1])
// console.log("index 2-"+name[2])
// console.log("index 3-"+name[3])
// console.log("index 4-"+name[4])
// name.append=("Bappy")
// console.log(name)
// name.delete=("Bappy")
// console.log(name)
// console.log(name)
// var years=[5,6]
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

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0,'Feb');
// Inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
months.splice(4, 1);
// Delete 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April"]
months.splice(4,0,'May')
// Inserts at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]