// 1. JAVASCRIPT ON THE BROWSER
// HTML 정보를 javascript를 통해 가져오거나 변경할 수 있다.
// console.dir(document); 를 통해 document element 정보를 javascript 로 가져올수 있음

console.dir(document);
alert("document.title = "+document.title);

// 타이틀 변경
document.title = "Change - YG";

// body 정보 
const body = document.body;
console.log("log = "+body);
console.dir(body);

// 해당 id의 element 를 불러온다.
const title = document.getElementById("title");

console.log(title);
console.dir(title);

// title.innerText = ""; > "" title 을 내용으로 변경
title.innerText = "THIS SITE IS A NOT-HAZARDOUS TEST SITE";
title.style.color = "red";
console.log("title.className = "+ title.className);

const title2 = document.getElementById("title02");
console.log("title2.className = "+ title2.className);


const hello = document.getElementsByClassName("hello");
console.log(hello);

// querySelector 을 사용하면 첫번째 값만 가지고온다, CSS selector 을 사용해 검색할 수 있다. 예시 => .hello h1:first-child 
// - getElementById() 와 하는 일은 같다.
// 모두 가지고 오고싶으면 querySelectorAll 을 사용
const h2 = document.querySelector(".test00");
console.log(h2);

const test01 = document.querySelector(".test01");
const test02 = document.querySelector(".test02");
const test03 = document.querySelector(".test03");
console.dir(test03);

function handleTitleClick(){
  console.log("title was clicked !");
}

function checktest03(){
  alert("클릭!");
}
function checkCopy(){
  alert("2번 내용을 카피했습니다 !");
}

function handleMouseEnter(){
  test03.innerText = "mouse !";
}
function handleMouseLeave(){
  test03.innerText = "mouse gone !";
}

// addEventListener("click", 실행될 함수 이름-실행아님,괄호는 x) : click event 클릭으로 발생하는 이벤트를 알아볼수 있음 , 클릭, 마우스를 올릴때 등 이벤트는 여러가지
test01.addEventListener("click", handleTitleClick);

// what are h1 and H2 tag ? https://developer.mozilla.org/en-US/docs/Web/API/Element event 를 볼수있음

// copy : 카피 감지(ctrl + c)
test02.addEventListener("copy", checkCopy);
// mouseenter : 마우스를 가져가면 반응

test03.addEventListener("mouseenter", handleMouseEnter);

// mouseenter : 마우스를 빼면 반응
test03.addEventListener("mouseleave", handleMouseLeave);



// 08.24 - 복습 : 모든 이벤트 가지고 놀기
const test04 = document.querySelector("div.test04");
console.dir(test04);
// 에러 : 왜 발생했는지 모름... test04.sty 하니까 style 자동완성 지원 x title.sty 하면 이건 지원해줌
// 암만 시도해도 안댐.. querySelector() 와 getElementById() 차이점인가 싶었음 - 근데 무시하고 style 적으니 됌... 갑자기 자동완성도 됌...이유머임;
function copySize(){
  test04.style.color = "red"
}
function clickSize(){
  test04.style.color = "blue"; 
}


test04.addEventListener("copy", copySize);
test04.addEventListener("mouseenter", copySize);

test04.addEventListener("click", clickSize);
// ==
test02.onclick = clickSize;
let count = 0;
function handleWindowResize(){
  if(count%2 == 0) document.body.style.backgroundColor = "gray";
  else if(count%2 != 0) document.body.style.backgroundColor = "black";
  count += 1;
}
function handleWindowCopy(){
  alert("copy");
}

function handleWindowOffline(){
  alert("Warning ! WIFI - Offline");
}

function handleWindowOnline(){
  alert("WIFI - Online");
}

// resize : 윈도우 크기가 바뀔 때 어떤 작업을 할 수 있게 합니다.

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

// 와이파이 연결 관련 이벤트
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


//  01. JAVASCRIPT 를 이용해서 클릭 이벤트를 통한 글 색깔 변경

// function clickColor(){
//   const color = test01.style.color;
//   let newColor;
//   if(color == "blue"){
//     newColor = "white";
//   }else{
//     newColor = "blue";
//   }
//   test01.style.color = newColor;
// }



// 02 . 위에 함수를 자바스크립트가 아니라 CSS 이용해서 바꾸기 - class 를 변경

// function clickColor(){
//   // if(test01.className == "active") test01.className = "test01";
//   // else test01.className = "active";
//   test01.className = (test01.className == "active") ?  "test01" : "active";
// }
// test01.addEventListener("click", clickColor);

// !!! 버그 : class 를 주면 최초의 class 가 사라지는 버그 발생 !!
// !!! 이전 클래스는 살리고 test01 클래스만 바꾸고 싶음 ! = > classList 를 사용


// 03. classList 를 통해 클래스 추가, 제거로 기존 클래스는 건들이지않음

// function clickColor(){
//   test01.classList.contains("active") ?  test01.classList.remove("active") : test01.classList.add("active");; 
// }
// test01.addEventListener("click", clickColor);




// 04. toggle function  ~ ! class name 확인 포함 되어있으면 제거, 아니면 포함 

function clickColorToggle(){
  test01.classList.toggle("active")
}

test01.addEventListener("click", clickColorToggle);


function copyColorTest(){
  test02.classList.toggle("active")
}

test02.classList.toggle("copy", copyColorTest);
