

//-------------------------------------------Conditional_Statements -------------------------------------------------------


let price =1500;
let discount;
if(price<=100){
    discount=price-price*(10/100)
}else if(price>=101 && price<=500){
    discount=price-price*(20/100)
}else if(price>=501 && price<=1000){
    discount=price-price*(30/100)
} else{
    discount=price-price*(45/100)
}
console.log("total price Rs",discount);

