"use strict";

const account1 = {
  owner: "Mark Shmedtman",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "jessica davis",
  movements: [5000, 3400, -150, -790, -3210, 1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Park Thomas Williams",
  movements: [340, -300, -20, 50, 400, -460, 100, -400],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

console.log(accounts);
console.log(accounts[0].movements);

///// display movements :::
//  movements: [5000, 3400, -150, -790, -3210, 1000, 8500, -30]
const box = document.querySelector(".boxleft");
const balance = document.querySelector(".sumdep");
const somdep=document.querySelector(".in")
const somwith=document.querySelector(".out")
const somint=document.querySelector(".interested")
const userinput=document.querySelector(".user")
const pininput=document.querySelector(".pin")
const welcome=document.querySelector(".title")
const app=document.querySelector("main")
//////// transfert amount
const transfertuser=document.querySelector(".transfert-input1")
const amountuser=document.querySelector(".transfert-input2")
const btntransfert=document.querySelector(".fleche1")
////////request   amount
const inputamount=(document.querySelector(".request-input"))
const btnamount=document.querySelector(".fleche2")
////////close account
const closeinput=document.querySelector(".close-input1")
const confirminput=document.querySelector(".close-input2")
const btnclose=document.querySelector(".fleche3")




const dipalyMovements = function (acc) {
  box.innerHTML = "";
  acc.movements.forEach((mov, i) => {
    let type = mov > 0 ? "deposit" : "withdraw";
    let html = `
           <div class="${type}-container">
            <div class="${type}-info">
              <span class="${type}"> ${i + 1} deposit</span>
              <span class="${type}-day"> 3 days ago</span>
            </div>
            <div class="${type}-montant">
              <h3>${mov}<i class="fa-solid fa-euro-sign"></i></h3>
            </div>
          </div>
       `;
    box.insertAdjacentHTML("beforeend", html);
  });
};
// dipalyMovements(account2.movements);






/////balance
const displaybalance = function (acc) {
  const result = acc.movements.reduce((acc, ele) => acc + ele, 0);
  balance.textContent = `${result} €`;
  currentaccount.credit=result
};

// displaybalance(account2.movements);




///// username foncion Mohamed Abdellaoui===>ma
const displayusername = function (arra) {
  arra.forEach(
    (person) =>
      (person.username = person.owner
        .toLowerCase()
        .split(" ")
        .map((ele) => ele[0])
        .join("")),
  );
};
displayusername(accounts)
console.log(accounts)






const displaysomme=function(acc){



  const result1=acc.movements.filter((ele)=>ele>0).reduce((acc,ele)=>ele+acc,0)
  console.log(result1)
  somdep.textContent=`${result1} € `


  const result2=acc.movements.filter((ele)=>ele<0).reduce((acc,ele)=>ele+acc,0)
  console.log(result2)
  somwith.textContent=`${Math.abs(result2)} € `



  const result3=acc.movements.filter((ele)=>ele>0).map((deposit,i,arr)=>{
  console.log("comees from filter :" ,arr)
  return (deposit*1.5)/100
}).reduce((acc,ele ,i,arr)=>{
   console.log("comees from filter :" ,arr)
   return ele+acc 
},0)
console.log(result3)
somint.textContent=`${result3} €`;


}

// displaysomme(account2.movements);




///// hedhi hiya lkhedma s7i7a
let currentaccount;
document.querySelector(".icon").addEventListener("click",function(){

if(currentaccount=accounts.find((acc)=>acc.username===userinput.value && acc.pin===Number(pininput.value))){
console.log("current account",currentaccount)

welcome.textContent=`welcome ${currentaccount.owner.split(" ")[0]}`
document.querySelector(".title").style.fontSize = "30px";
// document.querySelector(".user").value=""
// document.querySelector(".pin").value=""
userinput.value=pininput.value=""
app.style.opacity=1
dipalyMovements(currentaccount)
displaybalance(currentaccount)
displaysomme(currentaccount)
}else if(!userinput.value && !pininput.value){
  alert(" remplir les champs")
 
}else{
  alert("username or pin incorect")
  userinput.value=pininput.value=""
  
}

})



///////transfert amount
btntransfert.addEventListener("click",function(event){
  event.preventDefault()
  const receiver=accounts.find((acc)=>acc.username===transfertuser.value)
  const amount=Number(amountuser.value)
  const balance=currentaccount.credit
  if(balance>=amount && receiver && amount>0 && currentaccount.username !==receiver.username){
    currentaccount.movements.push(-amount)
    receiver.movements.push(amount)
  }
  transfertuser.value=amountuser.value=""
dipalyMovements(currentaccount)
displaybalance(currentaccount)
displaysomme(currentaccount)
})



////// request amount
btnamount.addEventListener("click",function(event){
event.preventDefault()
const valeur=Number(inputamount.value);
if(valeur>0&&valeur&&currentaccount.movements.some((mov)=>mov/10>valeur)){
  currentaccount.movements.push(valeur)
}

inputamount.value=""
dipalyMovements(currentaccount)
displaybalance(currentaccount)
displaysomme(currentaccount)
})


////// close account
btnclose.addEventListener("click",function(event){
event.preventDefault()
const closecompte=closeinput.value
const confirmcompte=Number(confirminput.value)
 if (
    currentaccount.username === closecompte &&
    currentaccount.pin === confirmcompte
  ) {
    const validation = confirm(
      "are you sure !! you want to delete this account !!! ",
    );
    if (validation) {
      const index = accounts.findIndex(
        (obj) => obj.username === closecompte,
      );
      accounts.splice(index, 1);
      app.style.opacity = 0;
      welcome.textContent = "Log in to get started";
      closeinput.value = confirminput.value = "";
    }
  } else {
   closeinput.value = confirminput.value = "";
    alert("userName or pin are wrong !!! please try again ...");
  }
});

































//////////// indexof
// const y=[1,2,3,4]
// const res=y.indexOf(4)
// console.log(res)


// //////////
// // findindex
// const x=[1,2,3,4]
// const result=x.findIndex((ele)=>ele<2)
// console.log(result)

///////includes
// const x=[100,200,300,400]
// const result=x.includes(300)
// console.log(result);

//////some
// const x=[100,200,300,400]
// const result=x.some((ele)=>ele>300)
// console.log(result);

//////every
// const x=[100,200,300,400]
// const result=x.every((ele)=>ele>200)
// console.log(result);

// /////in
// const int=[5000, 3400, -150, -790, -3210, 1000, 8500, -30]
// console.log(int)
// const result1=int.filter((ele)=>ele>0).reduce((acc,ele)=>acc+ele,0)
// console.log(result1)
// somdep.textContent=`${result1} €`;


// /////out
// const out=[5000, 3400, -150, -790, -3210, 1000, 8500, -30]
// console.log(out)
// const result2=out.filter((ele)=>ele<0).reduce((acc,ele)=>acc+ele,0)
// console.log(result2)
// somwith.textContent=`${Math.abs(result2)} €`;



// /////intersted
// const intersted=[5000, 3400, -150, -790, -3210, 1000, 8500, -30]
// console.log(intersted)
// const result3=intersted.filter((ele)=>ele>0).map((deposit,i,arr)=>{
//   console.log("comees from filter :" ,arr)
//   return (deposit*1.5)/100
// }).reduce((acc,ele ,i,arr)=>{
//    console.log("comees from filter :" ,arr)
//    return ele+acc 
// },0)
// console.log(result3)
// somint.textContent=`${result3} €`;

///tache faire
// const displaymessage=function(message){
// document.querySelector(".title").textContent=message
// }
// document.querySelector(".icon").addEventListener("click",function(){
// var input1=document.querySelector(".text").value
// var input2=document.querySelector(".number").value
// if(!input1 && !input2){
// displaymessage("not a text")
// document.querySelector(".title").style.fontSize = "40px";
// }else if(input1==account1.username && input2==account1.pin){
// displaymessage("welcome Mark Shmedtman ")
// document.querySelector(".title").style.fontSize = "40px";
// }else if(input1==account2.username && input2==account2.pin){
// displaymessage("welcome jessica davis ").style.fontSize = "70px";
// }else if(input1==account3.username && input2==account3.pin){
// displaymessage("welcome Park Thomas Williams ")
// document.querySelector(".title").style.fontSize = "40px";
// }else if(input1==account4.username && input2==account4.pin){
// displaymessage("welcome Sarah Smith ")
// document.querySelector(".title").style.fontSize = "40px";
// }
// else{
//   displaymessage("vérifier votre données")
// }
// })
// const result=accounts.find((person)=>(person.username=="ms" && person.pin=="1111"))
// console.log(result)







































// const array=[200, 450, -400, 3000, -650, -130, 70, 1300]
// const dinartunisian=3.3
// const positive=array.filter((ele)=>(ele>0))
// console.log(positive)
// const result=positive.map((ele)=>ele*dinartunisian)
// console.log(result)
// const sum=result.reduce((acc,ele)=>acc+ele,0)
// console.log(sum)
// document.querySelector(".sumdep").textContent=sum ;

// const array = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const dinartunisian = 3.3;
// const result = array
//   .filter((ele) => ele > 0)
//   .map((ele) => ele * dinartunisian)
//   .reduce((acc, ele) => acc + ele, 0);
// console.log(result);

// lecture data transformation for lecture
// foreach
// first exemple
// const array=[10,20,30,40,50,60]
// console.log(array)
// const result=[]
// array.forEach((ele)=>result.push(ele*2))
// console.log(result)

// map
// const array=[10,20,30,40,50]
// console.log(array)
// const result=array.map((ele)=>(ele+ele))
// console.log(result)

// const array=[10,20,30,40,50]
// console.log(array)
// const result=array.map((ele)=>{
//   return ele*2
// })
// console.log(result)

// const array=[10,20,30,40,50]
// console.log(array)
// const result=array.map(function(ele){
//   return ele*2
// })
// console.log(result)

// second exemple
// foreach
//  const euro=[100,200,300,400]
//  console.log(euro)
//  const tunisiandinar=3.3
//  const result=[]
//  euro.forEach((ele)=>result.push(ele*tunisiandinar))
//  console.log(result)

// map
// const euro=[100,200,300,400]
// console.log(euro)
// const tunisiandinar=3.3
// const result=euro.map((ele)=>(ele*tunisiandinar))
// console.log(result)
// const euro=[100,200,300,400]
// console.log(euro)
// const tunisiandinar=3.3
// const result=euro.map((ele)=>{
//   return ele*tunisiandinar
// })
// console.log(result)
// const euro=[100,200,300,400]
// console.log(euro)
// const tunisiandinar=3.3
// const result=euro.map(function(ele){
//   return ele*tunisiandinar
// })
// console.log(result)

// const user="Mohamed Abdellaoui"
// console.log(user)
// const user1=user.toLowerCase()
// console.log(user1)
// const user2=user1.split(" ")
// console.log(user2)
// const user3=user2.map((nom)=>nom[0])
// console.log(user3)
// const user4=user3.join("")
// console.log(user4)

// chaining pipeline
// const user="Mohamed Abdellaoui"
// const result=user.toLowerCase().split(" ").map((nom)=>nom[0]).join("")
// console.log(result)

// foreach
// const x=[3,1,4,3,2]
// console.log(x)
// const result=[]
// x.forEach((ele)=>{
//   if(ele>2)
//     result.push(ele)
// })
// console.log(result)
// filter
// const x=[3,1,4,3,2]
// console.log(x)
// const result=x.filter((ele)=>(ele>2))
// console.log(result)

// reduce
// const x=[3,1,4,3,2]
// console.log(x)
// let sum=0
// x.forEach((ele)=>sum+=ele)
// console.log(sum)

// const x=[3,1,4,3,2]
// console.log(x)
// const sum=x.reduce((acc,ele)=>acc+ele,0)
// console.log(sum)

// const x=[3,1,4,3,2]
// console.log(x)
// const sum=x.reduce((acc,ele)=>acc*ele,1)
// console.log(sum)

// const x=[3,1,4,3,2]
// console.log(x)
// const max=x.reduce((acc,ele)=>{
//   if(acc>ele){
//     return acc
//   }else{
//     return ele
//   }
// },x[0])
// console.log(max)

// const array=[200, 450, -400, 3000, -650, -130, 70, 1300]
// const dinartunisian=3.3
// const positive=array.filter((ele)=>(ele>0))
// console.log(positive)
// const result=positive.map((ele)=>ele*dinartunisian)
// console.log(result)
// const sum=result.reduce((acc,ele)=>acc+ele,0)
// console.log(sum)

// find exemple1
//   const numbers=[10,20,30,40,50]
//   const result=numbers.find((ele,i)=>{
//   console.log(i, ":",ele)
//   return ele>25
// })
// console.log(result)

// find exemple2
// const database=[
// {
//   username :"Mohamed",
//   age : 17,
//   coins : 300
// },

// {
//   username:"Hamma",
//   age : 18 ,
//   coins : 400

// },
// {
//   username:"Med",
//   age:"20",
//   coins:'500'

// }

// ]
// console.log(database)

// const result=database.find((person)=>(person.coins>300))
// console.log(result)
