/** -------------------------var / let,const 와 스코프 TDZ 이해--------------------------------------- */

/** 용어 정리
 * scope : 선언한 변수가 유효한 영역
 * function scope : 선언된 변수는 선언된 함수안에 접근 가능 - 함수
 * block scope : 모든 코드 블록에서 선언된 변수는 코드 블록 내부에서만 유효함 - if, while, for, try 문 등
 * 
 * 호이스팅이란 ? 자바스크립트에서 맨처음 스코프 내부 어디서든 변수 선언은 최상위 선언된 것 처럼 행동
 * 
 * var 은 한번 선언된 변수를 다시 선언 가능 - 선언은 호이스팅 되고 할당은 호이스팅 되지않음 에러 발생 x
 * let, const 는 선언된 변수를 다시 선언 불가능 - 주로 이 둘을 사용해야 에러 방지 - 호이스팅은 되지만 에러 발생 o
 * 
 * Temperal Dead Zone (TDZ) : 이 영역이 있는 변수는 사용할 수 없게 됌, 할당 전에 사용못하는 영역으로 만듬
 * 
 */


var name;
console.log(name);  //  선언은 되서 에러가 안나고 할당은 안되서 undefined 가 나옴 - let const 였으면 에러 발생
name = "wow";       // 에러가 나와줘야 좋음, 수정하기 쉽기 때문에

let test = 30;

function showTest(){
    console.log(test); // let 이 호이스팅이 안되는게 아님, 여기까지만 선언 되었다면 오류가 없지만

    let test = 20;     // 이 변수 선언으로 인해 이 영역 위쪽 영역이 TDZ 되어 오류 발생
}

// showTest();  let 부분을 주석하고 실행하면 오류 없음, 하지만 let 선언으로 TDZ 영역이 만들어져 오류 발생




/** 변수 심화 단계
 * 
 *  - 변수 생성과정
 *  1. 선언 단계            2. 초기화 단계              3. 할당 단계
 *                          ㄴ undefined 를 할당해주는 단계
 * 
 *  var  1. 선언 및 초기화 단계 (동시에 일어남)  2. 할당 단계
 *  let  1. 선언 단계      2. 초기화 단계      3. 할당 단계
 *                            ㄴ 여기서 오류 발생
 * 
 *  const 1. 선언 + 초기화 + 할당 (모두 동시에 일어남)
 * 
 * 
 *  var : 함수 스코프  ,  let + cosnt = 블록 스코프
 */

 
const age = 30;

if(age>19){
    var txt = '성인'; // var 는 if 를 나와도 사용 가능,  let + const 는 블록 스코프임으로 if 밖에서 사용불가
}

console.log("if문을 벗어나도 함수 스코프인 var는 사용 가능함 : "+txt);

function test008(){
    var testFun = "test";
}

// console.log(testFun);    var도 함수 밖에서는 사용 할 수 없음



/** ----- querySelector(), getElementById() 같은 HTML 을 이용한 것들은 맨 마지막에 js 를 선언해야 null 이 안들어감--- */
const t = document.querySelector(".test01");
let t2 = document.getElementsByClassName(".test02");
console.dir(t);
console.dir(t2);

const test22 = document.getElementById("title");

console.log(test22);

/** 자바스크립트 (JavaScript)에서 document.getElementById() 호출 시

해당 ID에 해당하는 요소가 있음에도 불구하고 null을 반환할 수 있다.

자바스크립트는 HTML과 함께 순차적으로 수행되는데

자바스크립트에서의 해당 요소에 대한 참조가 HTML 요소 생성보다 앞서면 null을 반환한다.

 

그래서 html script 추가를 맨 마지막에 해줘야 제대로 호출해서 값을 저장한다. */


