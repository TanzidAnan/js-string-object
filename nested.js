const collage ={
    name: 'Infra',
    class:['11','12'],
    events:['scinec fair', 'bijoy debose', '21 feb'],
    unique:{
        coler : 'bule'
    }
}
// console.log(collage.unique.coler);

collage.events[1] ="16 december";

console.log(collage.events[1]);
delete collage.class
console.log(collage);


const numbers =[54, 5454, 554,654, 12, 455, 898,4545];
for(const number of numbers ){
    console.log(number)
}

