 

function userNameMessage(username) {
  return !username || username.trim() === ""
    ? "Please Write Username"
    : `${username} log in`;
}

// console.log(userNameMessage());

function userNameMessage(username = "Sam") {
  return !username || username.trim() === ""
    ? "Please Write Username"
    : `${username} log in`;
}

// console.log(userNameMessage("Bappy"));

// const num = [1, 2, 45, 4, 7, 8, 4];

const calculatePrice = (...num) => {
  let totalPrice = 0;
  num.forEach((number) => {
    totalPrice += number;
  });
  return totalPrice;
};

// console.log(calculatePrice(10, 20, 50));

const calPrice = (...num) => {
  let totalPrice = num.reduce(
    (accuMelator, currentValue) => accuMelator + currentValue,
    0
  );

  return totalPrice;
};

// console.log(calPrice(1, 50, 20));


const Obj={
    name:"Shoe",
    price:"300"
}

function handaleObject(anyObject){
    console.log(`Product Name is ${anyObject.name} Price is ${anyObject.price}`);
     
}

handaleObject(Obj);


const myNewArray=[10,30,50,20];
 const sortArray=myNewArray.sort();

function handleArray(array){
    console.log(`Array second Value is ${array[1]}`);
}

// handleArray(myNewArray);
handleArray(sortArray)
