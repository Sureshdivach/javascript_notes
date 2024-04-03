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

