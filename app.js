let gameSeq=[];
let userSeq=[];
let hscore=0;
let score=0;
let btns=["yellow","red","purple","green"];
let started=false;
let h2=document.querySelector("h2");
let level=0;
document.addEventListener("keypress",function() {
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level : ${level}`;
    //choose random button
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    gameSeq.push(randColor);
    let randomBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);

    // console.log(randColor);
    // console.log(randomBtn);
    console.log(gameSeq);


    gameFlash(randomBtn);

}
function checkAns(idx){
   
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        console.log("Same value");
    }else{
        score=level;
        if(hscore<score){
            hscore=score;
        }
       
        h2.innerHTML=` Game Over! Your score was <b>${level}<b>  and highest score is <b> ${hscore-1}</b> <br> Press any key to start`;
        score=level;
        if(hscore<score){
            hscore=score;
        }
       
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150)
        
        reset();
    }
}
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);   
    checkAns(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
    userSeq=[];
    gameSeq=[];
    started=false;
    level=0;
}