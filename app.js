var scnd = document.querySelector ("#second");
var mint = document.querySelector ("#mint");
var min=0
var hours = document.querySelector ("#hours");
var hrs=0

var count =0;
var timer;

function startTimer(){
    timer = setInterval(function(){
        scnd.innerHTML =`${count ++}`
        if(count>60){
            count=0
            mint.innerHTML=`${min ++}`

        }

        else if (min>=60){
            min=0
            hours.innerHTML=`${hrs ++}`
        }
    },1000)
}
function stopTimer(){
    clearInterval(timer)
    
}
function resetTimer(){
    count="00"
    scnd.innerHTML="00"
    mint.innerHTML="00"
    hours.innerHTML="00"
    clearInterval(timer)
}