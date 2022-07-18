let counterValue = 0;
let counterDisplay = document.querySelector('span');
let counterMinus = document.querySelector('button[data-action="decrement"]');
let counterPlus = document.querySelector('button[data-action="increment"]');

counterPlus.addEventListener("click",()=>{
    counterValue += 1;
    counterDisplay.innerHTML = counterValue;
});

counterMinus.addEventListener("click",()=>{
    counterValue -= 1;
    counterDisplay.innerHTML = counterValue;
});