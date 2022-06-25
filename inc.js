let counter = {
    countNum: 0,
    increment(){
        return this.countNum++
    },
    decrement(){
        return this.countNum--
    },
    reset(){
        return this.countNum = 0;
    }
};

let incBtn = document.getElementById('inc');

incBtn.addEventListener("click",function(){
    counter.increment();
    document.getElementById("showNums").textContent = counter.countNum;

    if(counter.countNum >= 100){
        document.getElementById("showNums").style.width="34rem";
    }
});

let decBtn = document.getElementById('dec');
decBtn.addEventListener("click",function(){
    counter.decrement();
    document.getElementById("showNums").textContent = counter.countNum;

    if(counter.countNum <= -100){
        document.getElementById("showNums").style.width= "34rem";
    }
});
