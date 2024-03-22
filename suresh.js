

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



        //----------------------------------------------------------------------Arrays-------------------------------------------------------------------------
        // the array is a contiguous chunk of memory that can store multiple value.
        // Array is a data sturcuture

        let data = ["sunil",2,"mohan",40,true,false]
        console.log(data)                          // [ 'sunil', 2, 'mohan', 40, true, false ]


        //--------------------------------------------------Indexing Property---------------------------------------------------------------------------------->

        let data1 = ["sunil",2,"mohan",40,true,false]
        console.log(data1[0],data1[4])             //  sunil true

        //--------------------------------------------------Length Property------------------------------------------------------------------------------------>
        
        let data2 =["sunil",2,"manish","mukesh",40,true,false]
        console.log(data2.length);                 // 7

        //---------------------------------------How to add value in array.------------------------------------------------------------------------------------>

        // 01.  Push Method():-  add value at last index.

          let data3 =["sunil","manish","mukesh"]
          data3.push("naman")
          console.log(data3)           //  [ 'sunil', 'manish', 'mukesh', 'naman' ]

          data3.push({name:"chunnu",age:30})
          console.log(data3)           // [ 'sunil', 'manish', 'mukesh', 'naman', { name: 'chunnu', age: 30 } ]

        // 02 Unshift method() : add value at string Position index

          data3.unshift("mukesh")
          console.log(data3)          //['mukesh','sunil','manish','mukesh','naman',{ name: 'chunnu', age: 30 }]

        //------------------------------------How to delete from an array--------------------------------------------------------------------------------------->

         //01. pop method ():- last index delete.

          data3.pop()
          console.log(data3)      // [ 'mukesh', 'sunil', 'manish', 'mukesh', 'naman' ]


        //02. shift method():- first index delete.
        data3.shift()
        console.log(data3)        //[ 'sunil', 'manish', 'mukesh', 'naman' ]

        //Ex.:-
        let arr =["ram","rohit",3,6,"vivek"]
        arr.push("dk")
        let c = arr.length-1;
        console.log(c)         //output- 5
        arr.pop()
        arr.unshift("shyam")
        console.log(arr)       //output:-[ 'shyam', 'ram', 'rohit', 3, 6, 'vivek' ]