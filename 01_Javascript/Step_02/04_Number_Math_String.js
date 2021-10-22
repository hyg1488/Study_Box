/**
 * 10 진수 -> 2진수 / 16 진수
 * 
 */


let num = 10;
let num02 = 255;
console.log(num.toString()); // 문자열로 변경 "10"
console.log(num.toString(2)); // 2진수로 바꿈 "1010"
console.log(num02.toString(16)); // 16 진수로 바꿔 "FF" 가 된다.

// Math 라는 내장 객체가 있음.
// Math.ceil() : 올림 소수 점에 상관없이 값을 올림 (0만 안올림)
// Math.floor() : 내림 = 소수점 버림
// Math.round() : 반올림
// 변수.toFixed() : 숫자를 인수로 받아 그 숫자만큼 소숫점이하에 반영 하여 반올림
//                  toFixed(0) 이면 정수만 남고 toFixed(6) 소수보다 큰 수를 입력하면 0으로 채움 30.123400
// isNaN() : NaN인지 확인함
// parseInt() : 읽을 수 있는 숫자는 읽고 문자는 제외, 문자부터 시작하면 NaN

let num01 = 5.0;
let num03 = 5.5;
console.log(Math.PI); // 파이 값 
console.log(Math.ceil(num01)+" "+Math.ceil(num03));
console.log(Math.floor(num01)+" "+Math.floor(num03));
console.log(Math.round(num01)+" "+Math.round(num03));

// 참고 : 만약 소수점 둘째자리 까지 반올림 해달라면?
let userRate = 30.1236; // 둘째자리니까 12 는 살리기 위해 100을 곱함.

console.log(Math.round(userRate*100)/100) //3012.34 를 반올림 -> 그후 다시 100으로 나누면 30.12 가 나옴

// 이걸 간단히 해주는 것이 toFixed() 함수
console.log(userRate.toFixed(3)); // 3번째 자리 까지 반올림 

// 주의점 : 문자열을 반환함 ! 반환후 Number 로 변환해 사용해야함.
let testNumber = userRate.toFixed(3);
console.log(testNumber+12);

let testNumberNum = Number(userRate.toFixed(3));
console.log(testNumberNum-0.124+2);

// isNaN() 

let x = Number('x'); // NaN이 됌
console.log(x === NaN); // NaN은 == 이나 === 로 알수 없음 무조건 isNaN 으로만 판단 할 수 있음
console.log(isNaN(x));

// Number 은 문자를 무조건 NaN으로 반환하지만 parseInt() 는 숫자로 시작하면 숫자는 반환, 문자를 만나면 끝
let testInt = '123test';
console.log(parseInt(testInt)); //123 만 나옴
let testString = 'test123';
console.log(parseInt(testString)); //NaN 이 나옴

// parseInt 를 이용해 쉽게 16진수, 2진수 -> 10진수로 바꿀 수 있음
let testN = '11';
console.log(parseInt(testN, 16)); // 11(16진수) -> 17(10진수)
console.log(parseInt(testN, 2));  // 11 (2진수) -> 3(10진수)


// parseFloat() 는 부동 소수점을 반환함. ParseInt 는 소수점은 무시함


// Math.random() 은 랜덤 값을 생성 0 ~ 1 사이  만약 1~100 뽑고 싶으면 Math.floor(Math.random()*100)+1
// Math.max() 최대값 : Math.max(1,4,-1,5,10) => 10
// Math.min() 최소값 : Math.max(1,4,-1,5,10) => -1

// Math.abs() 절대값 : Math.abs(-1) => 1
// Math.pow(n,m) 제곱 :  Math.pow(2,10) = > 1024 (2의 10승)
// Math.sqrt() 제곱근 : Math.sqrt(16) // 루트 16 == 4



// String !
// String : html 은 ' ' 가 편할거임 "" 때문에 , 영어 문장은 " " 가편할 거임 It's 같은 거 때문에.
// .length 로 길이를 구함
// [2] 배열처럼 위치를 뽑아 낼 수 있음
// toUpperCase() 대문자 , toLowerCase() 소문자

// .indexOf('to') 해당 문자의 포함 위치
let desc = "Hi guys, Nice to meet you."
if(desc.indexOf('Hi')){
    console.log('Hi 가 포함된 문장입니다.');    // 이경우 indexOf('Hi') => 0 이므로 0 == false 이므로 실행 안됌.
}

if(desc.indexOf('Hi' > -1)){ // 이렇게 표현해줘야 포함하는지 알수 있음
    console.log('Hi 가 포함된 문장입니다.');
}

// 또는
if(desc.includes('Hi')){ // includes 는 문자가 포함 되었으면 True , 아니면 False
    console.log('Hi 가 포함된 문장입니다.');
}


// str.slice(n,m) n~m 까지 특정범위 문자열만 뽑음 m 이 없으면 끝까지 , 음수면 뒤에서부터 그만큼 세어서 끝냄

// subString(n,m) n-m 사이 음수는 0으로 인식함.


// substr(n,m) : n에서 시작해서 m개를 가져온다.

// .trim() : 앞뒤 공백 제거

// . repeat(n) : n번 해당 문자를 반복
