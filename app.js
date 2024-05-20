




document.addEventListener("DOMContentLoaded", ()=>{
    let main=document.querySelector("#main");
    let Insta=document.querySelector("#Insta");
let Lin=document.querySelector("#Lin");
let Git=document.querySelector("#Git");

main.addEventListener("mouseover", ()=>{
   setTimeout(()=>{
    Insta.style.display="block";
   }, 250) ;

   setTimeout(()=>{
    Lin.style.display="block";
   }, 500) ;

   setTimeout(()=>{
    Git.style.display="block";
   }, 750) ;
});

main.addEventListener("click", ()=>{
    setTimeout(()=>{
     Insta.style.display="none";
    }, 250) ;
 
    setTimeout(()=>{
     Lin.style.display="none";
    }, 500) ;
 
    setTimeout(()=>{
     Git.style.display="none";
    }, 750) ;
 });

});


let input=document.querySelector("#project");
let btn=document.querySelector("#newProject");
let List=document.querySelector(".card-text3");


btn.addEventListener("click", ()=>{
    let newValue=input.value;
    if(input.value !="")
        {
let item=document.createElement("li");
item.textContent=newValue;
List.append(item);
input.value="";
        }
        else{
            alert("!!please enter a project!!");
        }
})


  

//SImon Say Game

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "blue", "green"];
let level = 0;
let started = false;

let h6 = document.querySelector("h6");

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("game started");
    started = true;
    levelup();
  }
});



function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function levelup() {
    userSeq=[];
  level++;
  h6.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randcolor = btns[randIdx];
  let randbth = document.querySelector(`.${randcolor}`);
  gameSeq.push(randcolor);
  btnflash(randbth);
}

function checkAns(idx)
{
    if(userSeq[idx]===gameSeq[idx])
    {
if(userSeq.length==gameSeq.length)
{
    setTimeout(levelup, 1000);
}
    }

    else{

        h6.innerText=`Game Over! Your Score is  ${level} Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){document.querySelector("body").style.backgroundColor="white";}, 150);
        reset();
    }
}

function btnpress(){
    let btn=this;
 btnflash(btn);
 userColor=btn.getAttribute("id");
 userSeq.push(userColor);
 checkAns(userSeq.length-1);
 }

let allBtn=document.querySelectorAll(".btn1");
for(btn of allBtn){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}