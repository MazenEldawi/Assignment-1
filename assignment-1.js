// Part 1 : Coding

// 1

let str = "123";
console.log(Number(str) + 7);

// 2

let falsy = 0;
if(falsy == false){
    console.log("Invalid")
}

// 3

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

// 4

let arr = [1, 2, 3, 4, 5];

console.log(arr.filter((evenNum) => evenNum % 2 === 0));

// 5

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// 6

function weekDay(number) {
  switch (number) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
  }
}
console.log(weekDay(2));

// 7

let arrOfStr = ["a", "ab", "abc"];
console.log(arrOfStr.map((arrOfStr) => arrOfStr.length));

// 8

function divisible(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("Divisible by Both");
  } else {
    console.log("Choose a Number that divisible by 3 & 5");
  }
}
divisible(15);

// 9

let square = (num) => console.log(num ** 2);

square(5);

// 10

const person = { name: "John", age: 25 };

function user({ name, age }) {
  return `${name} is ${age} years old`;
}
console.log(user(person));

// 11

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

// 12

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
delay().then((result) => {
  console.log(result);
});

// 13

let arrayNum = [1, 3, 7, 2, 4];

function largestNum(numbers) {
  return Math.max(...numbers);
}
let largest = largestNum(arrayNum);
console.log(largest);

// 14
let userKeys = { name: "John", age: 30 };

let keys = Object.keys(userKeys);
console.log(keys);

// 15

let splitStr = "The quick brown fox";
let splitArr = splitStr.split(" ");
console.log(splitArr);


