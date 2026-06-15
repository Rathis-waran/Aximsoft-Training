//  Task 1

const prompt = require("prompt-sync")();
// let string = prompt("Enter the String: ");
// function task1(){
//     let s = "";
//     for(i = 0 ; i < string.length;i++){
//         if(string[i] != string[i + 1]){
//             s += string[i];
//         }
//     }
//     console.log(s);
// }

// task1();


// Task 2

// const prompt = require("prompt-sync")();
// let string = prompt("Enter the String: ")
// function task2(){
//     let current = '';
//     let longest = '';

//     for(i = 0 ; i < string.length;i++){
//         if(string[i] != ' '){
//             current+=string[i];
//         }
//         else{
//             if(current.length > longest.length){
//                 longest = current;
//             }
//             current = '';
//         }
//     }
//     console.log(longest);
// }

// task2();

//   Task 3

// const prompt = require("prompt-sync")();

// let arr1 = [];
// let arr2 = [];

// let array1 = parseInt(prompt("Enter the number: "))
// for(let i = 0 ; i < array1;i++){
//     arr1[i] = Number(prompt("Enter the array1 numbers: "))
// }

// let array2 = parseInt(prompt("Enter the number: "))
// for(let i = 0 ; i < array2;i++){
//     arr2[i] = Number(prompt("Enter the array2 numbers: "))
// }

// function task3(){
//     for(i = 0 ; i < arr1.length;i++){
//         for(j = 0 ; j < arr2.length;j++){
//             if(arr1[i] == arr2[j]){
//                 console.log(arr1[i]);
//             }
//         }
//     }
// }

// task3();

// Task 4

// const prompt = require("prompt-sync")();

// let num = Number(prompt("Enter the Number: "));

// let arr = [];

// function task4(){
//     let a = 0;
//     let i = 0;
//     while(num > 0){
//         a = num % 10;
//         arr[i] = a;
//         i++;
//         num = Math.floor(num / 10)
//     }
//     for (let i = arr.length-1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }

// task4();

// Task 5

// const prompt = require("prompt-sync")();
// let arr =[]
// let size = parseInt(prompt("Enter the characterSize: "));

// for(i = 0 ; i < size;i++){
//     arr[i] = prompt("Enter the character: ")
// }

// function task5(){
//     let frequency = {};
//     for(i = 0 ; i < arr.length;i++){
//         let value = arr[i];
//         frequency[value] = frequency[value]?frequency[value]+1:1;
//     }
//     console.log(frequency);
    
// }

// task5();

// Task 7

// const s1 = prompt("Enter the String: ");

// function task7() {
//     let keys = [];
//     let values = [];
//     let size = 0;

//     for (let i = 0; i < s1.length; i++) {
//         let ch = s1.charAt(i);
//         let found = false;
//         for (let j = 0; j < size; j++) {
//             if (keys[j] === ch) {
//                 values[j]++;  
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             keys[size] = ch;
//             values[size] = 1;
//             size++;
//         }
//     }
//     let find = false;
//     for (let i = 0; i < size; i++) {
//         if (values[i] === 1) {
//             console.log(keys[i]);
//             find = true;
//             break;
//         }
//     }
//     if(!find){
//         console.log(null);
        
//     }
// }

// task7();

//  Task 8

// let arr = [];

// let size = parseInt(prompt());
// for (let i = 0; i < size; i++) {
//     arr[i] = Number(prompt("Enter element: "));
// }
// let n = parseInt(prompt("Enter the size: "));

// function task8(arr, n) {
//     let result = [];
//     for (let i = 0; i < arr.length; i += n) {
//         let chunk = [];
//         for (let j = i; j < i + n && j < arr.length; j++) {
//             chunk[chunk.length] = arr[j];
//         }
//         result[result.length] = chunk;
//     }
//     return result;
// }

// let result = task8(arr, n);

// for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);
// }

// Task 9

// let arr = [];

// let size = parseInt(prompt("enter size: "));
// for (let i = 0; i < size; i++) {
//     arr[i] = Number(prompt("enter element: "));
// }

// let k = parseInt(prompt("enter the value of k: "));

// function task9(arr, k) {
//     let rotated = [];
//     let len = arr.length;
//     k = k % len;

//     for (let i = 0; i < len; i++) {
//         rotated[(i + k) % len] = arr[i];
//     }

//     return rotated;
// }

// let res = task9(arr, k);

// for (let i = 0; i < res.length; i++) {
//     console.log(res[i]);
// }

//  Task 10

// let str = prompt("enter the string: ");

// function task10(str) {
//     let sum = 0;
//     let currentNum = "";
    
//     for (let i = 0; i < str.length; i++) {
//         let ch = str.charAt(i);
//         let unicode = ch.charCodeAt(0);
        
//         if (unicode >= 48 && unicode <= 57) {
//             currentNum += ch;  
//         } else {
//             if (currentNum !== "") {
//                 sum += parseInt(currentNum);  
//                 currentNum = "";          
//             }
//         }
//     }

//     if (currentNum !== "") {
//         sum += parseInt(currentNum);         
//     }

//     return sum;
// }

// let result = task10(str);
// console.log(result);

// Task 11


// let obj1 = { a: 1, b: { c: 2 } };
// let obj2 = { a: 1, b: { c: 2 } };
// let obj3 = { a: 1, b: { c: 3 } };

// function getKeys(obj) {
//     let keys = [];
//     let i = 0;
//     for (let key in obj) {   
//         keys[i] = key;
//         i++;
//     }
//     return keys;
// }

// function task11(obj1, obj2) {

//     if (typeof obj1 !== typeof obj2) {
//         return false;
//     }

//     if (typeof obj1 !== "object") {
//         return obj1 === obj2;
//     }

//     if (obj1 === null && obj2 === null) {
//         return true;
//     }

//     if (obj1 === null || obj2 === null) {
//         return false;
//     }

//     let keys1 = getKeys(obj1);
//     let keys2 = getKeys(obj2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     let i = 0;
//     while (i < keys1.length) {
//         let key = keys1[i];

//         if (obj2[key] === undefined) {
//             return false;
//         }

//         if (!task11(obj1[key], obj2[key])) {
//             return false;
//         }

//         i++;
//     }

//     return true;
// }
// console.log(task11(obj1, obj2));  
// console.log(task11(obj1, obj3)); 


// Task 12

// let str = prompt("enter the string: ");

// function task12(str) {
//     let result = "";
//     let count = 1;
//     let i = 0;

//     while (i < str.length) {
//         if (str.charAt(i) === str.charAt(i + 1)) {
//             count++; 
//         } else {
//             result += str.charAt(i);
//             result += count;
//             count = 1; 
//         }
//         i++;
//     }

//     return result;
// }

// console.log(task12(str));

//Task 13

// let arr = [];
// let size = parseInt(prompt("enter the size: "));

// for (let i = 0; i < size; i++) {
//     arr[i] = Number(prompt("Enter the element: "));
// }

// function task13(){
//     let product = 1;
//     for(let i = 0 ; i < arr.length;i++){
//         if(arr[i] !== 0){
//             product =  product * arr[i];
//         }
//     }
//     console.log(product);
// }

// task13();


// Task 14

// let arr = [];
// let size = parseInt(prompt("size: "));

// for (let i = 0; i < size; i++) {
//     let val = prompt("element list: ");

//     if (val === "null") {
//         arr[i] = null;
//     } else if (val === "undefined") {
//         arr[i] = undefined;
//     } else if (val === "false") {
//         arr[i] = false;
//     } else if (val === "true") {
//         arr[i] = true;
//     } else if (val === "NaN") {
//         arr[i] = NaN;
//     } else if (val === "") {
//         arr[i] = "";
//     } else if (val === "0") {
//         arr[i] = 0;
//     } else if (Number(val) != 0 && val !== "") {
//         arr[i] = Number(val);
//     } else {
//         arr[i] = val;
//     }
// }

// function task14(arr) {
//     let result = [];
//     let j = 0;

//     for (let i = 0; i < arr.length; i++) {   
//         if (arr[i]) {
//             result[j] = arr[i];
//             j++;
//         }
//     }
//     return result;
// }

// let result = task14(arr);

// for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);
// }

// Task 15

// function task15() {
//   let s1 = prompt("Enter first string  : ");
//   let s2 = prompt("Enter second string : ");

//   let a = s1.toLowerCase().split(' ').join('');
//   let b = s2.toLowerCase().split(' ').join('');

//   if (a.length !== b.length) {
//     console.log("false");
//     return;
//   }

//   let sort1 = a.split('').sort().join('');
//   let sort2 = b.split('').sort().join('');

//   if (sort1 === sort2) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// task15();

//task 16


// function task16() {
//   let input = prompt("Enter brackets : ");

//   let stack = [];

//   for (let i = 0; i < input.length; i++) {
//     let ch = input[i];

//     if (ch === '(' || ch === '{' || ch === '[') {
//       stack.push(ch);
//     }

//     else if (ch === ')' || ch === '}' || ch === ']') {

//       if (stack.length === 0) {
//         console.log("false");
//         return;
//       }

//       let top = stack[stack.length - 1];

//       if (ch === ')' && top !== '(') {
//         console.log("false");
//         return;
//       } else if (ch === '}' && top !== '{') {
//         console.log("false");
//         return;
//       } else if (ch === ']' && top !== '[') {
//         console.log("false");
//         return;
//       }
//       stack.pop();
//     }
//   }

//   if (stack.length === 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// task16();

