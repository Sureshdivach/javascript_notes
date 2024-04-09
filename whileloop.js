// Que 01.---------------------------------- How to print all element of String -------------------------------------------------------------
// let str ="jaipur"
// let i =0;
//  while(i<str.length){
//    console.log(str[i]);
//    i++
//  }
        //output =j
              //  a
              //  i
              //  p
              //  u
              //  r
//output one line:-
                //   let bag=""
                //   while(i<str.length){
                //       bag=bag+str[i]+" "
                //       i++
                //   }
                //   console.log(bag); 
                //                     //output = j a i p u r

// Que 02 -----------------------------how to print all element an array-------------------------------------------------------------------------------------
    //    let arr =[1,2,3,4,5]
    //    let i=0;
    //    while(i<arr.length){
    //     console.log(arr[i])
    //     i++
    //     }
    //             // output 1
    //             //        2
    //             //        3
    //             //        4
    //             //        5


    // output one line:-           
                        // let arr =[1,2,3,4,5]
                        // let i=0;
                        // let bag= "";
                        //    while(i<arr.length){
                        //    bag=bag+arr[i]+" "
                        //     i++
                        //     }
                        //     console.log(bag);
                        //                         //output 1 2 3 4 5 

//Que 03.---------------------sum of array-----------------------------
        //  let arr =[1,2,3,4,5]
        //  let i=0;
        //  let sum=0;
        //  while(i<arr.length){
        //     sum=sum+arr[i]
        //     i++
        //  }
        //  console.log(sum);
        //                       //output = 15

//Que 04. -----------Print all EVEN NUMBER inside an array.----------------------
            // let arr =[1,2,3,4,5,3,10]
            // let i=0;
            // while(i<arr.length){
            //     if(arr[i]%2==0){
            //         console.log(arr[i]);
            //     }
            //     i++
            // }
            //           //output =2
            //                  // 4
            //                  // 10

//Que 05. ---------------Print (one line) all ODD NUMBER inside an array.------------------------------------
                // let arr =[1,2,3,4,5,9,10]
                // let bag ="";
                // let i=0;
                // while(i<arr.length){
                //     if(arr[i]%2==1){
                //         bag=bag+arr[i]+" "
                //     }
                //     i++
                // }
                // console.log(bag);
                //                    //1  3  5  9
// Que 06.---------COUNT how many times 2 present inside an array 
                //    let arr=[1,3,2,10,2,4,2,7,2]
                //    let count=0;
                //    let i=0;
                //    while(i<arr.length){
                //     if(arr[i]==2){
                //         count++
                //     }
                //     i++
                //    }
                //    console.log(count);
                //                     //    output= 4

//Que 07.----------COUNT how many time EVEN NUMBER present inside an array--------------------
                    //  let arr =[1,3,2,10,2,4,6]
                    //  let count=0;
                    //  let i=0;
                    //  while(i<arr.length){
                    //     if(arr[i]%2==0){
                    //         count++
                    //     }
                    //     i++
                    //  }
                    //  console.log(count);
                    //                       //output =5
        // output in one line
        // let arr =[1,3,2,10,2,4,6]
        // let count=0;
        // let i=0;
        // bag="";
        // while(i<arr.length){
        //    if(arr[i]%2==0){
        //        count++
        //        bag=bag+arr[i]+" "
        //    }
        //    i++
        // }
        // console.log(count,bag);
        //                         //output=5 2 10 2 4 6

//Que 08. ----------------ODD/Even Sum----------------
            // let arr=[1,6,2,10,2,4]
            // let i=0;
            // let evensum=0;
            // while(i<arr.length){
            //     if(arr[i]%2==0){
            //         evensum=evensum+arr[i]
            //     }
            //     i++
            // }
            // console.log(evensum);
            //                        //output = 24

//Que 09. let arr =[1,4,6,7,9,10,12] 
          //01. find sum of even number.
          //02. find sum of odd number.
          //03. find total sum of both even & odd number.
          //04. find the Avg of array.

// Ans.=
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
        //   console.log(evensum,oddsum,totalsum)
          Avg=totalsum/arr.length
          console.log(evensum,oddsum,totalsum,Avg)   //output = 32 17 49 7 