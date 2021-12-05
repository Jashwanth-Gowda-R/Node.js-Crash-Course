// // node.js basics
// var name = "jash";
// console.log(name);

// const greeting = (name) => {
//   console.log(`hello,${name}`);
// };

// greeting(name);
// greeting("shani");

// // global object
// console.log(global);

global.setTimeout(() => {
  console.log("hello shani");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("hello this is interval");
}, 1000);

console.log(__dirname);
console.log(__filename);
