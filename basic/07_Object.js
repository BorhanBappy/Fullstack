const tinderUser = new Object();
tinderUser.id = "1234hg";
tinderUser.name = "Bappy";
tinderUser.isloggedin = false;

// console.log(tinderUser);
// const tinderUser1={};
// console.log(tinderUser1);

const regularUser = {
  email: "Bappy@gmail.com",
  fullName: {
    userFullName: {
      FirstName: "Borhan",
      lastName: "Bappy",
    },
  },
};
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.FirstName);

const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};

const obj2 = {
  4: "d",
  5: "e",
  6: "f",
};

// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);
const obj4={...obj1,...obj2};
// console.log(obj4);
const user = [
  { id: 1, name: "bappy", email: "bappy@gmail.com" },
  {
    id: 2,
    name: "maruf",
    email: "maruf@gmail.com",
  },
  {
    id: 3,
    name: "sharukh",
    email: "sharukh@gmail.com",
  },
];
// console.log(user[1]);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isloggedin"));

const course={

  courseName:"Javascript Boss",
  coursePrice:"999",
  courseInstructor:"Bappy"
}

const {courseName,courseInstructor,coursePrice}=course;
// console.log(`Course Name ${courseName} Course Price is ${coursePrice}`);
// console.log(courseInstructor);

// Destructing

const des=({person})=>{
  console.log(name + age)
}

const person={
  name:"Bappy",
  age:28
}
// const name=person.name;
// const age=person.age;
const {name,age}=person;
// des(person);

console.log(name,age);


