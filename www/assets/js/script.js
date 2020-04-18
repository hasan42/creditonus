"use strict";

function finishSubscribe(event){
  event.preventDefault();
  event.target.classList.toggle("loading");
  event.target.blur();
  setTimeout(()=>{
    let form = document.getElementById("flipper");
    form.classList.add("flipper_done");
  },1500);
}

let btnSubFinish = document.getElementById("subscribe-finish");
btnSubFinish.addEventListener("click", finishSubscribe, false);
