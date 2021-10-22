// 배열 만들기  : 값을 저장할 수 있는 엘리먼트의 연속된 공간을 만들기위해 [] 를 사용 -  var array = [];
// 엘리먼트에는 어떤 자료형이든 저장될 수 있음.
var a = [];
a = [{name:"Kim", age:24},true,1,2,3,4.5,[1,2,3]];
console.log("a의 이름은 ", a[0].name, ", a의 나이는 ", a[0].age);
console.log(a[1]);
console.log(a[6]);
console.log("a의 길이 : "+a.length);

// 배열 사용법 
// .push(element) 배열 뒤에 엘리먼트 추가
// .pop()  배열 뒤에서 엘리먼트를 삭제하고 리턴
// .shift()  배열 앞에서 엘리먼트를 삭제하고 리턴
// .unshift(element)  배열 앞에 엘리먼트 추가

console.log(a);
a.pop();
console.log("pop 을 실행 : ", a);
a.push([1,2,3]);
console.log("push를 실행 : ", a)
a.shift();
console.log("shift를 실행 : ", a);
a.unshift("unshift");
console.log("unshift를 실행 : ", a)

// 주석 : //를 사용 or /* */ 를 사용

// -----------------------------------------------------------------------------------------------------------------------------------
console.log("--------------------- if 문 + switch 문 -------------------------------");


// if문 : if(조건식){   }else if(조건식){   }else{    }
var str = prompt("str 을 입력해주세요");
if(str.length >=1){
  console.log("str은 길이 1 이상");
}else{
  console.log("str은 길이 1 미만");
}

// switch 문
switch(str.length){
  case 0 : console.log("str 길이 0");
  break;
  case 1 : console.log("str 길이 1");
  break;
  case 2 : console.log("str 길이 2");
  break;
  case 3 : console.log("str 길이 3");
  break;
  case 4 : console.log("str 길이 4");
  break;
  default:
    console.log("str 길이 5 이상");
    break;

}

// -----------------------------------------------------------------------------------------------------------------------------------
console.log("--------------------- while 문 + for 문 -------------------------------");

// while 문

var while_count = 0;
while(while_count <= 10){
    console.log(while_count);
    while_count++;
}


// do while 문
var count = 1;
console.log("str의 길이만큼 반복");
do{
  console.log("현재 ", count, "번 반복했음. ");
  count++;
}while(str.length >= count);



// for 문
for(var i = 0; i <=5; i++){
  console.log(i);
}


 // Object 만들기

var obj = {
  name: "obk",
  age : 10,
  weight : 5
}

// for in 문  : 객체의 각 엘리먼트에 접근할 수 있는 반복문


var sum = 0;
for(var num in obj){
  console.log(obj[num]);
}

var array_test = ["hi","my","name","is","kim"];
var i = 1;
for(var test in array_test){
  console.log("array_test 의 ",i,"번째 값은 "+array_test[test]);
  i++;
}

// scope : 선언한 변수가 유효한 영역
// function scope : 선언된 변수는 선언된 함수안에 접근 가능

function a_f(){
  var v_a = "a";
  function b_f () {
    var v_b = "b";
    console.log("b에서 접근 : ", typeof(v), typeof(v_a), typeof(v_b));

  }
  b_f();
  console.log("a에서 접근 : ", typeof(v), typeof(v_a), typeof(v_b));

}

var v = "v";
a_f();
console.log("out 접근 : ", typeof(v), typeof(v_a), typeof(v_b));
