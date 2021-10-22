alert("Hello javascript");

// 콘솔 창에 메시지를 출력 - 화면은 확인 불가하지만 브라우저에 개발자 도구를 통해 확인 가능 (Console 부분)
console.log("Developer Console");
console.log("2");
console.log("3");

// var 변수 선언
let a;
a = 5;
console.log("a = "+a);

// prompt() 괄호 안의 메시지를 사용자에게 보여주고 문자열을 입력받는 명령

let name = prompt("이름을 입력하세요");

alert("당신의 이름은 "+name+"입니다.");

// number, string, boolean
const  b=3.14;
a = 100;
name = false;
var c = "안녕"

alert("name 은 "+ name+" 이다.");
// typeof() 해당 변수의 타입을 확인 할 수 있다.
alert(typeof(a));


// 변수 1. Number 정수화 / 실수화

var height = prompt("키를 입력해주세요");
console.log(height, typeof(height));

var height_int = parseInt(height);
console.log(height, typeof(height_int));

var height_float = parseFloat(height);
console.log(height, typeof(height_float));

// 정상적이지 않은 숫자나 표현 할 수 없는 범위의 수는 NaN , Infinity 로 출력된다.
height = 1/0;

close.log(height);


// 변수 2. string 
// 줄바꿈 : \n  따옴표 : \'  큰 따옴표 : \"  역슬래시 : \\
var string_test01 = '\를 사용하여 따옴표 사용 \'이렇게\' \\ 문자를 쓰고 싶으면 역슬래시 두번 \n 줄바꿈은 n 을 사용'


// * Object : {} 중괄호로 정의 가능, .을 사용하고 속성이름에 접근 가능, 객체 이름 뒤에 [] 대괄호 안에 속성 이름을 문자열로 접근 가능
var obj = {name:"TEST", age:30};
console.log(obj.name);
console.log(obj.age);


// const : 값을 바꿀 수 없음. , let : 값을 변경 가능 
let myName = "test";



// javascript 는 null 과 undefinded 가 있음.
