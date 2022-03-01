

const randomColorGenerator=document.getElementById('flipper');
const randomHexColor=document.getElementById('color');
let background=document.getElementById('background');


randomColorGenerator.addEventListener("click",()=>{
    let randomColor=Math.floor(Math.random()*16777216).toString(16);
    randomHexColor.innerHTML="#"+randomColor;
    background.style.backgroundColor="#"+randomColor;

})