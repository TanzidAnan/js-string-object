const numbers =[21, 123, 54, 69, 78, 45, 36, 45];
numbers.push(54);
numbers.pop()
numbers.push(2);
// console.log(numbers)

const num1 = [22, 21, 45, 54, 36];
const num2 = [54, 96, 36];
const num3 = [85, 36, 74, 96, 74];
const num4 = [85, 36, 74, 96, 74];
// console.log(num1.concat(num2.concat(num3.concat(num4))));


const num5 = [22, 21, 45, 54, 36];
// console.log(num5.join("--"))
// console.log(typeof num5.join())

const fastNmae = "tanzid,Anan,Marzan,Melon";
const x =fastNmae.split(",");
console.log(x)
console.log(Array.isArray(x))