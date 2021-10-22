// * Object : {} 중괄호로 정의 가능, .을 사용하고 속성이름에 접근 가능, 객체 이름 뒤에 [] 대괄호 안에 속성 이름을 문자열로 접근 가능
var obj = {name:"TEST", age:30};
console.log(obj.name);
console.log(obj.age);


// Undefined 와 null : undefined 는 시스템에서 어떤 변수나 속성이 정의되지 않은 경우를 표현하기 위해 사용한다. 
// null 은 비어있는 상태를 표시
var a;
var b = null;
console.log("a 는 "+typeof(a));
console.log("b 는 ",typeof(b))," 이고 ", b ," 값을 저장하고있다.";

// 연산자 : + 더하기 , - 빼기 , * 곱하기 , / 나누기 , % 나머지 , ** 제곱 모두 사용 가능 , 단항연산자(++, --) 
// 사용 가능
a = 10;
b = 20;
console.log(a++);
console.log(a);
console.log(b--);
console.log(b);
console.log(a+b);

// 보충 ! Math 관련 명령어
// Math.pow(a,b) a의 b승을 구해준다.   Math.sqrt(a) a 의 제곱근     Math.random() 0 ~ 1 사이의 임의의 난수 발생
var c = Math.pow(a,b);

console.log(c);
console.log(Math.random());


// --------------------------------------------------------------------------------------------------------------------------------------

// function 함수 이름 (파라미터1, 파라미터2){ 
//   실행 코드 
//   return 반환값;
// }

function sum(a,b){
  return a+b;
}

console.log("sum 함수 => ",sum(2,3));

// 관계 연산자  < , > , <= , >= , == , != 모두 사용 가능

function checkA(a,b){
  return a > b;
}

console.log("A는 B보다 큰가 ? ", checkA(5,2));

function check_1_value(a){
  return a == 1;
}

console.log("A는 1인가 ? ", checkA(2));

// 연산자 우선순위
// 1. ++ , --
// 2. !
// 3. * , / , %
// 4. + , -
// 5. < , <= , > , >=
// 6. == , !=
// 7. &&
// 8. ||

var t = true;
var f = false;
function chekc_OR(){
  return t||f;
}

console.log(chekc_OR());



