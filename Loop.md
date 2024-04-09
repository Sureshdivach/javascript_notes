****************************************************************-----------------Loop----------- *************************************************

   01. ************** While Loop **********************************

 Ex.01
            let i=0;
            while(i<=10){
                console.log(i);
                i++;
            }
                //   output 0 1 2 3 4 5 6 7 8 9 10

Ex.02
            let total=0;
            let i1=0
            while(i1<=10){
                console.log(i1);     //   output 0 1 2 3 4 5 6 7 8 9 10
                total=total+i1;
                i1++;
                 console.log(total)     //output 0 1 3 6 10 15 21 28 36 45 55
            }
            console.log(total)   
                                        //output  55   
            
            
 Ex. let nam= "rajasthan" count the  value of a
            let nam = "rajasthan"
            let g = 0;
            let m=0;
             while(g<nam.length){
                               if(nam[g] ==="a"){                           
                                   m++;  
                                  }     
                                  g++
                                }
                            console.log(m)   output  3

Ex.  let dep="Jaipur Police"
     01.count of "i"
     02.count of "p"
     03.total count "i" & "p"
Ans.  
      let dep = "Jaipur Police"
      let count =0;
      let countI = 0;
      let countP= 0;
      let i = 0;
     
     
             while(i<dep.length){
                         if(dep[i] ==="i"){
                          countI++
                         }else if(dep[p]==="p"){
                          countP++
                         }
                         i++
                       }
                       console.log('count of i ${countI}, count of p ${countP}')                                   //output    2 , 2
             while(i<dep.length){
                                 if(dep[i]==="i" || dep[i]==="p"){
                                              count++
                                               }
                                     i++
                                }
                                console.log(count)                                                                  //output   04



    Ex.:- let dep="Jaipur Police"
          01.count of "i"
          02.count of "p"
          03.total count "i" & "p"
             let dep="Jaipur police"
             let count=0;
             let countI= 0;
             let countP= 0;
             let k = 0;
                            
    01 &02.
             while(k<dep.length){
                        if(dep[k]=="i"){
                                     countI++
                         }else if(dep[k]=="p"){
                             countP++
                             }
                                k++
                        }
                         console.log(`count of i ${countI}, count of p ${countP},`)     //output  count of i 2, count of p 2,

    03
            while(k<dep.length){
                if(dep[k]=="i"||dep[k]=="p"){
                    count++
                }
                k++
            }
               console.log(`total count of i and p ${count}`)    // output total count of i and p 4                            
                                                                                    
    Que. how many even number and odd number in table number (01 to 20 ) 
                 let numb = 1
                 let odd =0;
                 let even=0;
                 while(numb<=20){
                                if(numb%2==0){
                                    even++
                                    console.log("number is even",numb);
                                }else{
                                    odd++
                                    console.log("number is odd",numb)
                                }
                                numb++
                                }                        
              console.log("odd is",odd,"even is",even);                                 //output odd is 10 even is 10


Que. how to sum of even and odd number in table (01 to 20)
     
                let numb1=1;
                let evensum=0;
                let oddsum=0;

                while(numb1<=20){
                    if(numb1%2==0){
                        evensum=evensum+numb1
                        console.log("number is even",numb1)
                    }else{
                        oddsum=oddsum+numb1
                        console.log("number is odd",numb1);
                    }numb1++
                }
             console.log("oddsum is",oddsum,"evensum is",evensum)                        //output  oddsum is 100 evensum is 110



 Que 01.---------------------------------- How to print all element of String ------------------------------------------------------------
                   
                   let str ="jaipur"
                   let i =0;
                    while(i<str.length){
                                        console.log(str[i]);
                                        i++
                                        }
                                   output = j
                                            a
                                            i
                                            p
                                            u
                                            r
    output one line:-
                        let bag=""
                        while(i<str.length){
                            bag=bag+str[i]+" "
                            i++
                        }
                        console.log(bag); 
                                         // output = j a i p u r

Que 02 -----------------------------how to print all element an array-------------------------------------------------------------------------------------
                        
                         let arr =[1,2,3,4,5]
                         let i=0;
                         while(i<arr.length){
                          console.log(arr[i])
                          i++
                          }
                                   output 1
                                          2
                                          3
                                          4
                                          5


     output one line:-           
                         let arr =[1,2,3,4,5]
                         let i=0;
                         let bag= "";
                            while(i<arr.length){
                            bag=bag+arr[i]+" "
                             i++
                             }
                             console.log(bag);
                                                // output 1 2 3 4 5 

Que 03.---------------------sum of array-----------------------------
                         
                         let arr =[1,2,3,4,5]
                         let i=0;
                         let sum=0;
                         while(i<arr.length){
                            sum=sum+arr[i]
                            i++
                         }
                         console.log(sum);
                                             // output = 15

Que 04. -----------Print all EVEN NUMBER inside an array.----------------------
            
                         let arr =[1,2,3,4,5,3,10]
                         let i=0;
                         while(i<arr.length){
                             if(arr[i]%2==0){
                                 console.log(arr[i]);
                             }
                             i++
                         }
                                            // output = 2
                                                       4
                                                       10

Que 05. ---------------Print (one line) all ODD NUMBER inside an array.------------------------------------
                 
                   let arr =[1,2,3,4,5,9,10]
                   let bag ="";
                   let i=0;
                   while(i<arr.length){
                       if(arr[i]%2==1){
                           bag=bag+arr[i]+" "
                       }
                       i++
                   }
                   console.log(bag);
                                            // output=  1  3  5  9
Que 06.---------COUNT how many times 2 present inside an array 
                  
                    let arr=[1,3,2,10,2,4,2,7,2]
                    let count=0;
                    let i=0;
                    while(i<arr.length){
                     if(arr[i]==2){
                         count++
                     }
                     i++
                    }
                    console.log(count);
                                            // output= 4

Que 07.----------COUNT how many time EVEN NUMBER present inside an array--------------------
                    
                     let arr =[1,3,2,10,2,4,6]
                     let count=0;
                     let i=0;
                     while(i<arr.length){
                        if(arr[i]%2==0){
                            count++
                        }
                        i++
                     }
                     console.log(count);
                                            // output= 5
  // output in one line:-

                     let arr =[1,3,2,10,2,4,6]
                     let count=0;
                     let i=0;
                     bag="";
                     while(i<arr.length){
                        if(arr[i]%2==0){
                            count++
                            bag=bag+arr[i]+" "
                        }
                        i++
                     }
                     console.log(count,bag);
                                             //output=5 2 10 2 4 6

Que 08. ----------------ODD/Even Sum----------------
            
                     let arr=[1,6,2,10,2,4]
                     let i=0;
                     let evensum=0;
                     while(i<arr.length){
                         if(arr[i]%2==0){
                             evensum=evensum+arr[i]
                         }
                         i++
                     }
                     console.log(evensum);
                                            //output = 24

Que 09.-------------- let arr =[1,4,6,7,9,10,12]-------------------------- 
        01. find sum of even number.
        02. find sum of odd number.
        03. find total sum of both even & odd number.
        04. find the Avg of array.

Ans.=

          let arr =[1,4,6,7,9,10,12]
          let i =0;
          let evensum=0;
          let oddsum=0;
          let totalsum=0;
          while(i<arr.length){
            if(arr[i]%2==0){
                evensum=evensum+arr[i]
            }else{
                oddsum=oddsum+arr[i]
            }
            i++
          }
          totalsum=evensum+oddsum
          console.log(evensum,oddsum,totalsum)
          Avg=totalsum/arr.length
          console.log(evensum,oddsum,totalsum,Avg)   
                                             //output = 32 17 49 7 