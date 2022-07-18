let nameInput = document.querySelector('input#name-input');
let nameSpan = document.querySelector('span')

nameInput.addEventListener("input",(event)=>{
    if (event.currentTarget.value) {
        nameSpan.innerHTML = document.querySelector('input').value
    }
    else
        nameSpan.innerHTML = "Anonymous";    
});