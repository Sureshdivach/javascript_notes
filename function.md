------------------------------------------------------------function---------------------------------------------------------------------------------------->
Functions:-
         Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. 
Syntax:-
         function functionName(parameters) {
                                            code to be executed
                                          }
Declaring a Function:-
                      The syntax to declare a function is:-
                                                    function nameOfFunction () {
                                                            // function body   
                                                   }
                     A function is declared using the function keyword.
                     The basic rules of naming a function are similar to naming a variable. It is better to write a descriptive name for your function. For example, if a function is used to add two numbers, you could name the function add or addNumbers.
                     The body of function is written within {}.
          example:-
                   ***** // declaring a function named greet()
                    function greet() {
                                      console.log("Hello there");
                                     }****
Calling a Function:-
                    In the above program, we have declared a function named greet(). To use that function, we need to call it.
                    Here's how you can call the above greet() function.
                   **// function call
                          greet();**

         Example:-
                       // program to print the text
                       // declaring a function
                          function greet(name) {
                                                console.log("Hello " + name + ":);
                                               }

                        // variable name can be different
                           let name = prompt("Enter a name: ");

                        // calling function
                           greet(name)

01.Normal Function:--
          Ex.-
                let f= 50;
                let h=20;
                function printData(){
                console.log(f+h)
                }
                printData()                        // output           70
          case 02. Dynamic Function--

          Ex.:-
      
                function addNumber(i,j){
                console.log(i+j)
                console.log(i*j)
                }
                addNumber(40,50)                    //    output           90 and 2000

          Ex.:-
               function calValue(a,b){
               console.log(a+b);
               console.log(a*b);
               console.log(a-b);
               console.log(a/b);
              }  
               calValue(40,10)                       //    output 50  400  30  4
    02. Arrow function:-
            Ex.:-
                let suresh =(a,b)=>{
                console.log("sum of a and b is", a+b)
                console.log(`product of a and b ${a*b}`);
                }
                suresh(10,20)                     //    output   sum of a and b is 30     product of a and b200