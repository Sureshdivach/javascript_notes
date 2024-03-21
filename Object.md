Object:-
         It is a data Structure that store the data in a key-value manner
         -we can also store object inside object.

         ex.-
             var user={
             name:"rahul"
             age:24,
             gender:"male",
             
             }
             console.log(user)      // output= name=rahul, age=24, gender=male

=============== How to access value from Object:==============================
01. Bracket Notation:-
      console.log(user["name"])                   // output= name=rahul
      console.log(user["age"] , ["gender"])       // output- age=24, gender= male

02. Dot Notation:-
      console.log(user.name)                      // output- name=rahul
      console.log(user.age,user.gender)           // output- age=24, gender=male

*============object inside object==============================================

Ex.:-
      let ramu={
        name:"chunnu"
        fname:"munnu",
        age:30,
        mobile: 9875684894,
        city: "delhi"
        state:{
          school:'dps'
          class:10
        }
      }

bracket notation=
                console.log(ramu["state"] ["class"])          // output 10
dot natation=
                console.log(ramu.state.class);                // output 10

*===========How to add new key in Excisting obj:==============================
 
 let data={
  name:"mohit"
 }
  data.city= "delhi"
  data.name="manish"

  console.log(data)         // output  name= manish, city= delhi 

*=============how to delete key in excisting object:=========================

  let data={
    name:"manoj"
    age:27,
    city:"delhi"
  }
 delete data.city
 delete data.name

 console.log(data);         //output:- age=27