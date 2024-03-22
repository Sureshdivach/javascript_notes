     //----------------------------------------------------------------------Arrays------------------------------------------------------------------------->
         the array is a contiguous chunk of memory that can store multiple value.
        Array is a data sturcuture

        let data = ["sunil",2,"mohan",40,true,false]
        console.log(data)                                //  output:-  [ 'sunil', 2, 'mohan', 40, true, false ]


     //--------------------------------------------------Indexing Property---------------------------------------------------------------------------------->

        let data1 = ["sunil",2,"mohan",40,true,false]
        console.log(data1[0],data1[4])             //  output:-  sunil true

     //--------------------------------------------------Length Property------------------------------------------------------------------------------------>
        
        let data2 =["sunil",2,"manish","mukesh",40,true,false]
        console.log(data2.length);                 //  output:-  7

     //---------------------------------------How to add value in array.------------------------------------------------------------------------------------>

  01.  Push Method():-  add value at last index.

          let data3 =["sunil","manish","mukesh"]
          data3.push("naman")
          console.log(data3)           //  output:-   [ 'sunil', 'manish', 'mukesh', 'naman' ]

          data3.push({name:"chunnu",age:30})
          console.log(data3)           //  output:-   [ 'sunil', 'manish', 'mukesh', 'naman', { name: 'chunnu', age: 30 } ]

  02. Unshift method() : add value at string Position index

          data3.unshift("mukesh")
          console.log(data3)          //    output:-   ['mukesh','sunil','manish','mukesh','naman',{ name: 'chunnu', age: 30 }]

    //------------------------------------How to delete from an array--------------------------------------------------------------------------------------->

  01. pop method ():- last index delete.

          data3.pop()
          console.log(data3)      //   output:-   [ 'mukesh', 'sunil', 'manish', 'mukesh', 'naman' ]

 02. shift method():- first index delete.
        data3.shift()
        console.log(data3)        //  output:-   [ 'sunil', 'manish', 'mukesh', 'naman' ]

        //Ex.:-
        let arr =["ram","rohit",3,6,"vivek"]
        arr.push("dk")
        let c = arr.length-1;
        console.log(c)              // output:-  5
        arr.pop()
        arr.unshift("shyam")
        console.log(arr)            // output:- [ 'shyam', 'ram', 'rohit', 3, 6, 'vivek' ]