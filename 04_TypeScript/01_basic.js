"use strict";
// 00. 환경 설정
// npm install -g typescript
// tsc --init  : tsconfig.json 파일 자동 생성
// tsc : ts 파일 => js 파일로 변환
// tsc 에러 발생시, windows 스크립트 허용 확인
/**
 * Windwos PowerShell
 * set-ExecutionPolicy '정책'
 *
 * Restricted   - windows 클라이언트 컴퓨터에 대한 기본 실행 정책, 스크립트 실행 불가 (* 이전 선택)
 *
 * AllSigned    - 스크립트를 실행 가능
 * Bypass       - 아무것도 차단되지 않고 경고, 프롬프트가 없음
 * Default      - 기본 실행 정책을 설정
 * RemoteSigned - windows server 컴퓨터에 대한 기본 실행 정책, 스크립트 실행 가능 (* 현재 선택)
 * undefined    - 현재범위에 설정된 실행 정책이 없음
 *
 */
/** 01. 기본 타입 **/
/**************************************************************************************************************************************** */
const isTypeScriptBoolean = true; // 불리언
const isNum = 123; // 숫자
const isString = "test"; // 문자열
const isNull = null; // null
const isUndefined = undefined; // undefined
let isAny = true; // any - 어떤값이든 허용
isAny = "test";
isAny = 12314;
isAny = null;
function voidTest() { } // void - null, defined 만 값으로 가질 수 있음
let test = undefined;
// let test02 : void = null; 이건 에러남.. null 은 안되나?
function alwaysThrow() {
    throw new Error("ERROR");
}
/**  02. 배열과 튜플 **/
/**************************************************************************************************************************************** */
// 02-1 배열
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myFavoriteBeers = ['Imperial', 'India', 'Weizeenbock'];
// 02-2 배열의 또 다른 방식
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const stringArray = ['test', 'test2'];
// 02-3 튜플 
// 튜플 타입 변수는 정확히 명시된 개수 만큼의 원소만을 가질 수 있다.
const nameAndHeight = ['홍길동', 30,];
// 튜플 타입의 값을 Array 프로토타입의 메소드를 통해 조작하는 것은 금지되지 않는다는 점에 유의해야 한다
// 예를 들어 아래와 같은 코드는 에러를 내지 않는다.
nameAndHeight.push(53);
/** 03. 객체 **/
/**************************************************************************************************************************************** */
const user = { name: '홍길동', height: 180 };
// 선택 속성 : 속성명 뒤에 물음표 (?) 를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현 가능
const userWithUnkownHeigt = { name: '홍길동' };
// 읽기 전용 속성 : readonly 키워드를 붙여 해당 속성의 재할당을 막을 수 있다.
const userRead = { name: '안희종' };
// 이 때 별칭은 단순히 새로운 이름을 붙일 뿐이고, 
// 실제로 새로운 타입이 생성되는 것은 아니라는 점에 유의하라. 예를 들어, 아래와 같은 코드의 에러 메시지에는 UUID 대신 string 이 사용된다.
function getUser(uuid) {
    console.log(uuid);
}
// getUser(8); < 여기서 나오는 에러는 uuid 가 아니라 string 으로 표시되어 나옴
/** 05. 함수 */
/**************************************************************************************************************************************** */
// 필요한 정보 : 1. 매개 변수의 타입(parameter) , 2. 반환값 (return value)
function sum(a, b) {
    return (a + b);
}
function logTest(param) {
    console.log(param);
}
console.log(sum(1, 2));
// 05-1 화살표 함수  () => 반환타입
const onePlusOne = () => { }; // js 화살표
// 이거 이해가 안가네;
// 기본 매개변수 (default)
function greetings(name = 'stranger') {
    console.log(name);
}
greetings();
greetings('kim');
// 05-2 선택 매개변수
// - 자바스크립트는 더 들어온 인자는 버리고 덜 들어온 인자는 undefined가 들어오는 것과 돌일하게 취급하고 어떻게든 함수를 실행하려고 한다.
// 이러한 경우에서 선택 매개변수를 통해 매개변수의 생략여부를 선택할 수 있다.
function fetchVideo(url, subtitleLanguage) {
    const option = { url };
    if (subtitleLanguage) {
        console.log('tet');
    }
}
fetchVideo('url.com');
fetchVideo('url.com', 'ko'); // 둘다 ok
function double(arg) {
    if (typeof arg === 'string') {
        return `${arg}${arg}`;
    }
    else if (typeof arg === 'number') {
        return arg * 2;
    }
    else if (Array.isArray(arg)) {
        return arg.concat(arg);
    }
}
console.log(double(3));
console.log(double('ab'));
console.log(double([true, false]));
let cb;
const onClick = function (event, cb) {
    // this는 HTMLElement 타입
    console.log(this.tagName);
    cb();
};
console.log("===========================================\n" + "===================================================================\n");
