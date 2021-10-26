/**
 * 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담음
 * 
 * 
 */

let [x,y] = [1,2];

let users = ['mike', 'tom', 'jane'];
let str = "mike-tom-jane"
let [u1,u2,u3] = str.split("-"); // split 으로 쪼개서 넣을 수 있음


let [a=3, b=4, c=5] = [1,2]; // 값이 없으면 undefined 가 들어가서 기본값을 부여하여, 주는 값이 없으면 기본값을 넣음
    // a=1, b=2 , c=5
let [user1,, user2] = users; // 공백으로 필요없는 요소는 생략가능

console.log(u1);
console.log(u3);
console.log(user1);

// 배열 구조 분해 바꿔치기 a, b 바꾼다면 c 를 만들어서 바꿨었는데.

[a,b] = [b,a]; // 이걸루 가능 - 임시변수 필요 없음

console.log(`a는 ${a}, b는 ${b}`);


// 객체도 구조 분해 가능

let user = {name : 'Mike', age : 30};
let {name, age} = user;

console.log(name);
console.log(age);

// 변수이름을 바꿀수도 있음

let {name: userN, age:userA, gender = 'male'} = user; // gender 은 없기 때문에 male 기본값이 들어감

console.log(`${userN}, ${userA} ${gender}`);


/**
 * 나머지 매개변수 (Rest Parameters)
 * 
 * 전개 구문 (Spread syntax)
 * 
 * 
 */


function showName(name){ // JS에서 인수전달 개수 제한이 없음
    console.log(name);
}
showName('Mike', 'Tom'); // tom은 전달 안댐

/**
 *  인수 접근 : arguments , 나머지변수
 */

function showName02(name, age){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName02('Tina', 30);
// ES^ 환경이면 나머지 매개변수 (Rest parameters) 사용을 권장

function showName03(age,...names){ // 제일 마지막 위치
    console.log(names);
}

showName03(30, 'tom','arri','Kim');

// 전개구문 배열 : 복제

// arr1 을 4,5,6,1,2,3 으로
let arr1 = [1,2,3];
let arr2 = [4,5,6];

arr1 = [...arr2, ...arr1]; // 이렇게 간단하게 합칠 수 있음
console.log(arr1);

let userTest = {name:'tom'};
let info = {age:30};
let fe =['js','react'];
let lang = ['eng', 'kor'];
userTest = {
    ...userTest,
    ...info,
    skills : [...fe, ...lang],
}


console.log(userTest);
