const numbers =[25, 65, 78, 45, 54, 21, 44, 99, 88,36, 74];
let event1 = [];
for(let item of numbers){
    if(item % 2 ===0){
        event1.push(item)
    }
}
console.log(event1)