/** Array Methods
 * 
 * arr.splice(n,m) : n 번째부터 m개 특정 요소를 지움
 * arr.slice(n,m) : n 부터 m 까지 반환
 * arr.concat(arr2, arr3 ..) : 합쳐서 새 배열 반환
 * arr.sort() : 재정렬 - 이거 복잡해서 Lodash 라이브러리를 많이 씀, https://lodash.com
 * arr.reverse() : 역순 재정렬
 * arr.join() : 배열을 합쳐서 문자열로 만듬
 * 
 * 
 * 01. arr.forEach(fn) : 배열 반복 fn 함수 for(item, index, arr){} item : 요소 , index 숫자, arr : 해당 배열
 * 02. arr.indexOf(v, n) : 해당 v 값을 탐색 후, 어느 위치에 있는지 반환 - 없으면 -1을 반환, 뒤에 숫자를 넣으면 n번부터 탐색 시작
 *   , arr.lastIndexOf : 맨 뒤에서 부터 탐색 시작
 * 03. includes() 포함 여부만 확인
 * 04. find(fn) 조건에 만족하는 값 - 객체 찾을때 유용함
 *   , findIndex(fn) -> 조건에 만족하는 값의 위치, includes 처럼 값을 찾는데 복잡한 연산이 가능함
 * 05. arr.filter(fn) 조건에 만족하는 모든 요소를 배열로 반환
 * 06. arr.map(fn) 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환 - 실무에서 많이 사용댐
 * 07. reduce() 배열을 돌면서 원하는 작업을 하고 최종값을 반환함.
 * 
 * map , filter, forEach, reduce 무엇을 사용할지 실무에서 잘 판단해서 사용하길
 * 
 */


const arr = [1,2,3,4,5];
arr.splice(1,2);
console.log(arr);

//arr.splice(n,m, x) : 특정 요소를 지우고 x 추가
let result = arr.splice(0,1,1,2,3);

console.log(arr);

// arr.splice() : 삭제된 요소 반환
console.log(`삭제된 값  result = ${result}`);


// arr.slice(n,m) : n 부터 m 까지 반환, m 은 안적으면 끝까지 반환, 아무것도 안적고 slice() 만 하면 배열이 복사됌
let result2 = arr.slice(1,3);

console.log(result2);

// arr.concat(arr2, arr3 ..) : 합쳐서 새 배열 반환

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1.concat(arr2[0], arr2[1], arr2));
// 01. arr.forEach(fn) : 배열 반복 fn 함수 for(item, index, arr){} item : 요소 , index 숫자, arr : 해당 배열

arr1.forEach((num, index)=>{
    console.log(`${index} : ${num}`);
});


// 02. arr.indexOf , arr.lastIndexOf
arr1 = [1,2,3,4,5,6,6,3,4,5,1,'test','hi'];
console.log(arr1.indexOf(3));    // 해당 값을 탐색 후, 어느 위치에 있는지 반환 - 없으면 -1을 반환
console.log(arr1.indexOf(3,4));    // 뒤에 숫자는 n번부터 탐색 시작
console.log(arr1.lastIndexOf(3)); // lastIndexOf 는 맨 뒤에서 부터 탐색 시작

// 03. includes() 포함 여부만 확인

console.log(arr1.includes(2)); //true
console.log(arr1.includes(2245)); //false

// 04. find(fn) 조건에 만족하는 값, findIndex(fn) -> 조건에 만족하는 값의 위치, includes 처럼 값을 찾는데 복잡한 연산이 가능함
const resultArr = arr1.find((item)=>{
    return item%2 === 0; // 짝수를 찾아서 값을 뽑음, 첫번째 true 값만 반환함. 만약 없으면 undefined 를 반환하고 끝
}) 

console.log(resultArr);

// 객체 찾을때 유용함 

let userList = [
    { name : 'tom', age : 30 },
    { name : 'jerry' , age : 10},
    { name : 'merry' , age : 60},
];

console.log(userList.find((user) =>{
    if(user.age < 19){
        return true; // age 가 19 이하인 객체 이름 찾기
    }
    return false;
}));

console.log(userList.findIndex((user) =>{
    if(user.age < 19){
        return true; // age 가 19 이하인 객체 이름 찾기
    }
    return false;
}));


// 05. arr.filter(fn) 조건에 만족하는 모든 요소를 배열로 반환
console.log(userList.filter((user) =>{
    if(user.age > 19){
        return true; // age 가 19 이하인 객체 이름 찾기
    }
    return false;
}));


// arr.reverse() : 역순 재정렬

let arrRev = [1,2,3,4,5,'a','b','c'];

console.log(arrRev.reverse());

// 06. arr.map(fn) 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환 - 실무에서 많이 사용댐

let userMap = userList.map((user, index) =>{
    return Object.assign(user, {
        isAdult : user.age > 19,
    })
});

console.log(userMap);

// join : 배열을 합쳐서 문자열로 만듬

let arrJoin = ["안녕", "나는", "철수야"];

let resultJoin = arrJoin.join(); // 쉼표를 넣어서 스트링으로 만듬 안녕,나는,철수야
resultJoin = arrJoin.join(" "); // 쉼표를 대신 다른 값을 넣어 만듬

console.log(resultJoin);

// split 스트링을 잘라 넣음

let str = "Hi my name is hong";
console.log(str.split(" "));

// typeof 는 배열도 오브젝트로 찍힘. Array.isArray 로 확인 가능
console.log(Array.isArray(arrRev)); // true 배열임
console.log(Array.isArray(str)); // false 배열 아님


// sort 배열 재정렬

console.log(arrRev.sort()); 

let arrSort = [27,12,5,6];

console.log(arrSort.sort()); // 12, 27, 5, 6 이 된다. 값을 비교할수 있는 함수를 넣어줘야함

function fun(a,b){
    return a-b;
}

arrSort.sort(fun);

console.log(arrSort);

// 이거 복잡해서 Lodash 라이브러리를 많이 씀, https://lodash.com


// 07.  reduce() 배열을 돌면서 원하는 작업을 하고 최종값을 반환함.

let arrReduve = [1,2,3,4,5];
                            // prev 누적값 , cur 현재값, num = index
console.log(arrReduve.reduce((prev, cur, num)=>{
    return prev+cur;
}, 0)); // 초기값 0 으로 시작, 지정한 숫자로 초기값이 시작됌
let NewUserList = [
    { name : 'tom', age : 60 },
    { name : 'jerry' , age : 10},
    { name : 'merry' , age : 40},
    { name : 'kim', age : 30 },
    { name : 'hong' , age : 10},
    { name : 'lee' , age : 13},
];
console.log(NewUserList.reduce((prev, cur)=>{
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev;
}, [])); // 초기값 빈 배열