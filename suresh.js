

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

//------------------------------------------------ternory operator---------------------------------------------------------
//Example:-
        //    let a = 10;
        //    let b = 20;
        //     a==b ? console.log("equal"):console.log("Not equal")

//Example:-
           let x =  "data 1"
           let y =  "data 1"
           let z =  "data 3"
           x==y ? console.log("true") : y==z ? console.log("true") : x==z ? console.log("true") : console.log("false");

// Que.01 : Write a program to gretest three numbers using ternary operator.
           
          let num1 = 90;
          let num2 = 102;
          let num3=70;
                    
         num1>num2 && num1>num3 ? console.log("num1 is greater"): num2>num1 && num2>num3 ? console.log("num2 is greater"): console.log("num3 is greater");

// Que.02: Write a program Positive and Negative number using ternary operator.

         let num = -10;
         
         num>=0 ? console.log("Positive number"): console.log("Negative number");

// Que.03: Imagine you have one variable a="LoggedIn". Write a javaScript statement that assigns the string "Welcome back!" to a variable greeting if isLoggedIn is true, otherwise assigns "Please log in.". Utilize a ternary operator to achieve this.
         
        var a = "LoggedIn"

        a =="LoggedIn" ? console.log("Welcome back!"): console.log("Please Log in.")

// Que.04: Suppose you have one variable dayOfWeek="Monday" representing the day of the week. Write a JavaScript statement that assigns "Weekend" to a variable if dayOfWeek is "Saturday" or "Sunday" , otherwise assigns "Weekday". Use if else condition to solve this program.

        var dayOfweek="Monday"
        var day;

        if(dayOfweek=="Saturday" || dayOfweek=="Sunday"){
            day="Weekend"
        }else{
            day="Weekday"
        }
        console.log(day)