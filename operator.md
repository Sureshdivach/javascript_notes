<-----------------------------------------------------------Que.01 Explain mathematical operator in javaScript.------------------------------------------------------------------>
ans.:-
      Arithmetic operators are used for performing mathematical calculations in JavaScript:

            Operator	                 Name	                                             Example
               +	                   Addition                                    	        6 + 9 = 15;
               -	                   Subtraction	                              	       20 - 15 = 5;
               *	                   Multiplication	                                    3 * 7=21;
               /	                   Division	                                           10 / 5=2;
               %	                  Remainder (sometimes called modulo)	               20%10=0; or 20%30=20;
               ++                      Increment Number                                   let a=10; a++= 11;
               --                      Decrement                                           let a=10; a--= 09;
               ()                     Grouping operators                                   (a=10, b=5, a+b=15) 



  <------------------------------------------------Que.02 Explain Comparison Operator in JavaScript------------------------------------------------------------------>           
  Ans.:
  
             Operator	               What it means

                ==	                    Equal to (comparison only value)
                !=	                   Not equal to
                ===	                   Strictly equal to with no type conversion  (comparison both value and Data type)
                ! ==	               Strictly unequal to with no type conversion
                >	                   Greater than
                >=	                   Greater than or equal to
                <	                   Less than
                <=	                   Less than or equal to
   Exampale:-

          Operator                                                                            Exampale

        01. Equal to                                                          let x = 3;x == 3;                                         // Output = true
                                                                              let x = 3;x == 5;                                         // Output = false
                     
        02. not equal                                                         let y = 8;y != 9;                                         // Output = true
                     
        03. Strictly equal to with no type conversion                         let z = 4; z=== 4; z === '4';                             // Output = true , false
                     
        04. Not equal to                                                      let a = 18; a !== 18;                                     // Output = false,
                     
        05.greater than                                                       let f = 72; f > 80; f > '30';                             // Output = false, true;
                     
        06.greater than or equal to                                           let g = 102; g >= 90; g >= 103;                           //Output = true, false;
                             
        07.less than                                                          let w = 1066; w < 476; w < 1945;                          //Output = false, true
        
        08.less than or equal                                                let p = 2001; p <= 1968; p <= 2001; p <= 2020;             //Output = false, true, true


        <------------------------------------------------Que.03: Write a Program of add two numbers.------------------------------------------------------------------>
        Ans.-
                         var a = 5;
                         var b = 10;
                         var c = a + b;
                        console.log(c);                // Output: 15


        <-----------------------------------------Que.04: Write a Program of Substract two numbers.------------------------------------------------------------->  
        Ans.:-

                        var a = 10;
                        var b = 5;
                        var c = a - b;
                        console.log(c);                // Output: 5 

    <-----------------------------------------Que.05: Write a Program of Multiplication two numbers.------------------------------------------------------------->  
        Ans.:-

                        var a = 5;
                        var b = 10;
                        var c = a * b;
                        console.log(c);                // Output: 50

    <-----------------------------------------Que.06: Write a Program of Division two numbers.------------------------------------------------------------->  
        Ans.:-

                        var a = 10;
                        var b = 5;
                        var c = a / b;
                        console.log(c);                // Output: 2

<-----------------------------------------Que.07: Write a Program by using % modulas (remainder) to check remainder of  two numbers.----------------------------------> 

        Ans:-

                        var a = 10;
                        var b = 3;
                        var c = a % b;
                        console.log(c);               // Output: 1