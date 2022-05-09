// project 8
//    reverse
// const fruits = ["HELLO", "WORLD "];
// fruits.reverse();

// console.log(fruits[0] + fruits[1]);

//project 9

// function splitOddAndEven(numbers) {
//     let odd = [];
//     let even = [];

//     for (let i = 0; i < numbers.length; i++) { // i= i+1;
//       if (numbers[i] % 2 === 0) {
//         // number is even
//         even.push(numbers[i]);
//       } else {
//         // number is not even (=odd)
//         odd.push(numbers[i]);
//       }
//     }

//     // create an object with the odd and even array in it
//     const returnObject = {
//       odd,
//       even,
//     };

//     return returnObject;
//   }
//   console.log(splitOddAndEven([1, 2, 3,4,5,6]));

//project 10

// function splitOddAndEven(numbers) {
//     let odd = [];
//     let even = [];

//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 === 0) {
//         // number is even
//         even.push(numbers[i]);
//       } else {
//         // number is not even (=odd)
//         odd.push(numbers[i]);
//       }
//     }

//     // create an object with the odd and even array in it
//     const returnObject = {
//       odd,
//       even,
//     };

//     return returnObject;
//   }
//   console.log(splitOddAndEven([1, 2, 3,4,5,6]));

// project 3
// let numbers = [1,2,3,4,5]
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }
// console.log(sum)

// project 2
// let chars = ['8', '9', '3', '1', '5', '1', '9', '8'];
// let uniqueChars = [...new Set(chars)];

// console.log(uniqueChars);

// project 6
// let text = "Hello";
// let result = text.toLowerCase();
// console.log(result);

// project 1
// var inputArr = [8,9,3,1,5,9];

// function removeItem(array, item) {
//   for(i = 0; i<array.length; i++){
//     if(array[i] == item) {
//       array.splice(array.indexOf(item), 1);
//     }
//   }
// }
// removeItem(inputArr, 9);

// }
// const cars = ["saab","bmw","anbu","rahul"]
// console.log(cars);
// cars.pop()
// console.log(cars);
// let myIndex = cars.indexOf("bmw");
// console.log(myIndex);
// cars.splice(myIndex,1);
// console.log(cars);

// project 1
// let cars = [8,9,3,1,5,9

// ]

// cars.pop()
// console.log(cars);
// let myIndex = cars.indexOf(9);
// console.log(myIndex);
// cars.splice(myIndex,1,);
// console.log(cars);
// var newArray=cars.filter(function(value,myIndex,arr){
//     return value==9;
// })

// let cars = ["bicycle", "bike", "car"];

// cars.splice(1, 2);
// console.log(cars);

// for(let i=1; i<=6; i++){
//     if(i%2!==0)
//     console.log("odd numbers" + i);}
//     for(let i=1; i<=6; i++){
//         if(i%2==0)
//         console.log("even numbers"+i);}
//     else {(i%2==0)
//     console.log("even numbers"+i);

// }}
// const person = {
//   age: 22,
// };
// person.age = 25;
// person.age = 30;
// const arr1 = [1, 2, 3, 4];
// const arr2 = arr1

// console.log(arr1, arr2);

// arr2.push(5);
// arr1.push(6);

// console.log(arr1, arr2);

// premitive | Reference;

// String, Integer | Object, array;

// const age = 12;
// const fruits = ["apple", "mango"];
// const cars = ["bicycle", "bike", "car"];

// cars.splice(1, 1);
// console.log(cars);
// let a = "Hello" + " " + "world";
// console.log(a);
// let myVariable = 3;

// console.log(myVariable == 4);
//
// let number1 = 3;
// let number2 = 4;
// console.log(number1 * number2);

// function addit(man1, man2) {
//   return man1 * man2;
// }
// console.log(4);

// let age = prompt("what is your age", 18);
// if (age < 18) {
//   var parentPermission = confirm("I have my parents permission");
//   if (parentPermission) {
//     alert("you are allowed to roaster ride");
//   } else {
//     alert("you are not allowed to roller coast ride");
//   }
// } else {
//   alert("you are allowed to roller coast ride");
// }
// eleven
// let version1 = 1.001;
// let version2 = 1.01;
// if (version1 < version2) {
//   console.log(-1);
// } else if (version1 > version2) {
//   console.log(1);
// } else console.log(0);

// if (n = 4^4 == 64) {
//   console.log(true);
// } else (n = 4 ^4 == 80){;
// console.log(false);}

function silkBoard() {
  console.log("welcome");
}
silkBoard();
