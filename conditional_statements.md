<----------------------------Conditionals-Statements in JavaScript -------------------------------------------->

01. “If” statements:           where if a condition is true it is used to specify execution for a block of code.
02. “Else” statements:         where if the same condition is false it specifies the execution for a block of code.
03. “Else if” statements:      this specifies a new test if the first condition is false.


01. "If" statements:-
                      EXAMPLE
                               var a=20;  
                               if(a>10){  
                            console.log("value of a is greater than 10");  
                            } 

                                // output:"value of a is greater than 10" 

02. “Else” statements:-
                    Example:-
                             let a=20;  
                            if(a%2==0){  
                            console.log("a is even number");  
                            } else {  
                                console.log("a is odd number");  
                            }  

                              // output:"a is even number"

03. “Else if” statements:-
                     Example:-

                       let a=20;  
                       if(a==10){  
                       console.log("a is equal to 10");  
                       } else if(a==15){  
                        console.log("a is equal to 15");  
                       } else if(a==20){  
                       console.log("a is equal to 20");  
                       } else{  
                            console.log("a is not equal to 10, 15 or 20");  
                         }  

                                   // output:"a is equal to 20"


 Question:-
           let light color = “green”
           Write a program that simulates a traffic light. If the light is “green”, print “Go”. If it's “yellow”, print “slow-down”. If it's “red”, print “stop”
  Ans:-
             if(light color == “green”){
                     console.log(“Go”)
             }else if (light color == “yellow”){
                     console.log(“Slow-down”)
             }else{
                      console.log(“stop”)}
 