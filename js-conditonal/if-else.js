/**
 * MulTI_Levle_Condation
 * 
 * 
 * */ 

const price =9000;

if(price >= 5000){
    // 10% discount
    const discount =price * 10 /100;
    const payAmout =price -discount
    // console.log(payAmout)
}
else{
    console.log(price)
}

const price1 =4000;
if(price1 >= 52000){
    const discount1 = price1 *10 / 100;
    const payAmount1 = price1 -discount1;
    console.log(payAmount1)
}
else if(price1 >= 2500){
    // 5% discount 
    const discount1 =price1 * 5 /100;
    const payAmount1 =price1 - discount1;
    console.log(payAmount1)
}
else{
    console.log(price1)
}