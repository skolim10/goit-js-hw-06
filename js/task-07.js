const slider = document.querySelector('input#font-size-control');

slider.addEventListener("input", (event) => {
    let selectSize = document.querySelector('input').value;
    document.querySelector('span').style.fontSize = selectSize + "px";
});