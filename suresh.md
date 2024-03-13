       

        <---------------------------Basic JavaScript NOTES-------------------------------------------------------->
        
       <------------------------------------- Que.01:- What is Data Type in JS.-------------------------------------------------------->
        Ans.:-  
               Data types in JavaScript define the data type that a variable can store. JavaScript includes primitive and non-primitive data types.  

        I. primitive data types:-
                                  1. null
                                  2. undefined
                                  3. boolean
                                  4. number
                                  5. string

        Ex.:-
               let counter = 120;
               console.log(typeof(counter));     //"number" 

               let counter = false; 
               console.log(typeof(counter));     //"boolean" 

               let counter = "Hi";
               console.log(typeof(counter));     // "string" 

               let counter; 
               console.log(typeof counter);      // undefined 




        II. Non-primitive data types:-

                                        Data Type                              Explanation

                                        Object                         It is an instance that allows us to access members in JavaScript.
                                        Array                          It represents a collection of similar elements in JavaScript.
                                        RegExp                         It represents a regular expression in JavaScript.
								

      <-------------------------------------  Que.02:-  what    is   JavaScript.-------------------------------------------------------->
        Ans:-
               JavaScript is a programming language initially designed to interact with elements of web pages. JavaScript allows you to add interactivity to a web page. Typically, you use JavaScript with HTML and CSS to enhance a web page’s functionality, such as validating forms, creating interactive maps, and displaying animated charts.

               JavaScript can run on both web browsers and servers. A popular JavaScript server-side environment is Node.js. Unlike client-side JavaScript, server-side JavaScript executes on the server and allows you to access databases, file systems, etc. 

               In 1995, JavaScript was developed by  Brendan Eich , 



<-------------------------------------Que.03:- What is Array in JavaScript.-------------------------------------------------------------------------->
        Ans:-
             An array is a collection of items of same data type stored at contiguous memory locations. 

            Ex.- 
                   let arr=[10,20,30];                       // This array will store integer 
                   let arr2 = ['c', 'd', 'e']                    // This array will store characters 
                   let arr3 = [28.5, 36.5, 40.2]        // This array will store floating elements


      <-------------------------------------  Que.04:-  What is object in JavaScript.-------------------------------------------------------->
        Ans:-
             Objects are important data structures in JavaScript. This is partly because arrays are objects in  JavaScript, and you'll use them all the time.
             Objects are super important for grouping data and functionalities,  so you can do a lot with an object in JavaScript. 

        Ex.:-
          Let personinfo= {
                           Name:”Manish”,
                           Age:26,
                           Mobile:9685479895,
                           Post:”ias”,
                          }
          Console.log(personinfo)               // output name=”Manish”,age:26,Mobile:______,post:_____,



<-------------------------------------Que.05:- Primitive and Non-primitive data-types in JavaScript.-------------------------------------------------------->
        Ans:-

                          Primitive data-types                                                 Non-primitive data-types

                           01.  null                                                              01.  Object
                           02.  undefined                                                         02.  Array
                           03.  boolean                                                           03.  RegExp
                           04.  Number
                           05. string


<-------------------------------------Que.06:-  Write all three JavaScript Keywords which are used for variable Declaration.-------------------------------------------------------->
        Ans:-
                   We can declare variables to store data by using the var , let , or const keywords.
               1. let – is a Block-scope variable, can be reassign  .
               2. var – is an global-scope variable. 
               3. const. – is like let , but the value of the variable can't be changed.
