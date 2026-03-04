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

const dipalyMovements = function (arr) {
  box.innerHTML = "";
  arr.forEach((mov, i) => {
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
dipalyMovements(account2.movements);






/////balance
const displaybalance = function (array) {
  const result = array.reduce((acc, ele) => acc + ele, 0);
  balance.textContent = `${result} €`;
};

displaybalance(account2.movements);




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



/////in
const int=[5000, 3400, -150, -790, -3210, 1000, 8500, -30]
console.log(int)
const result1=int.filter((ele)=>ele>0).reduce((acc,ele)=>acc+ele,0)
console.log(result1)
somdep.textContent=`${result1} €`;


/////out
const out=[5000, 3400, -150, -790, -3210, 1000, 8500, -30]
console.log(out)
const result2=out.filter((ele)=>ele<0).reduce((acc,ele)=>acc+ele,0)
console.log(result2)
somwith.textContent=`${Math.abs(result2)} €`;



/////intersted
const intersted=[5000, 3400, -150, -790, -3210, 1000, 8500, -30]
console.log(intersted)
const result3=intersted.filter((ele)=>ele>0).map((deposit,i,arr)=>{
  console.log("comees from filter :" ,arr)
  return (deposit*1.5)/100
}).reduce((acc,ele ,i,arr)=>{
   console.log("comees from filter :" ,arr)
   return ele+acc 
},0)
console.log(result3)
somint.textContent=`${result3} €`;













const displaymessage=function(message){
document.querySelector(".title").textContent=message
}

document.querySelector(".icon").addEventListener("click",function(){
var input1=document.querySelector(".text").value
var input2=document.querySelector(".number").value
if(!input1 && !input2){
displaymessage("not a text")
document.querySelector(".title").style.fontSize = "40px";
}else if(input1==account1.username && input2==account1.pin){
displaymessage("welcome Mark Shmedtman ")
document.querySelector(".title").style.fontSize = "40px";
}else if(input1==account2.username && input2==account2.pin){
displaymessage("welcome jessica davis ").style.fontSize = "70px";
}else if(input1==account3.username && input2==account3.pin){
displaymessage("welcome Park Thomas Williams ")
document.querySelector(".title").style.fontSize = "40px";
}else if(input1==account4.username && input2==account4.pin){
displaymessage("welcome Sarah Smith ")
document.querySelector(".title").style.fontSize = "40px";
}
else{
  displaymessage("vérifier votre données")
}
})

const result=accounts.find((person)=>(person.username=="ms" && person.pin=="1111"))
console.log(result)







































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
