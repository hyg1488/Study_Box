const mainColor = document.querySelector('.mainColor');

console.log(mainColor.className);
function test(){
    if(mainColor.className === "mainColor") mainColor.className = "changeColor";
    else mainColor.className = "mainColor";
}

mainColor.addEventListener("click",test);