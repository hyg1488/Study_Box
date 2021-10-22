/** 01 Shorthand property names
 * 
 * JS 오브젝트는 key 값과 value 값으로 이루어져 있음
 * 변수를 이용해 새로운 오브젝트를 만들때 key 와 value 의 이름이 동일한 경우 축약이 가능
 */


const name = "hong";
const age = 27;
const test01 = {
    name : name,
    age : age
}

console.log(test01.name);

const shorthandProperty = {
    name,
    age
}

console.log(shorthandProperty);


/** 02 Destructuring assignment
 * 
 * 오브젝트의 key 와 value 에 접근할 때 test01.name 선언하고 변수 각각에 설정했다면
 * 
 * Destructuring assignment 를 이용해 {name, age } 한줄로 변수 설정 가능
 * 
 * {기존 키 이름 : 새로운 키 이름}
 * {name : newName} = 
 * 
 */

const name01 = shorthandProperty.name;
const age01 = shorthandProperty.age;

console.log("일반적인 변수 선언 : "+name01+", "+age01);
const {name:newName, age:newAge} = shorthandProperty; // 오브젝트는 키 이름을 바꾸고 싶으면 이렇게 선언해야됌
console.log("Destructuring assignment 를 사용 : "+newName+","+newAge);


// 배열도 동일하게 사용 가능
const members = ['tom', 'jerry', 'kim'];

const firstMember = members[0];
const secondMember = members[1];

console.log(firstMember+" and "+secondMember);

// Destructuring assignment 배열에 사용
const [first, second, third] = members;
console.log(first,second,third);

// 참고
const [F, S, T] = members;
console.log(F,S,T); // 배열은 정해진 키 이름이 없음



/** 03 Spread Syntax
 * 
 * 따로 복사 (X) , 참조값을 복사하기 때문에 값을 변경하면 복사한 변수도 함께 복사됌
 * 
 */

const obj1 = {key : "key1"}
const obj2 = {key : "key2"}
const array = [obj1,obj2];

// 배열 복사 - array.map 이나 foreach 를 쓸수도 있지만
const arrayCopy = [...array];
// 이렇게 복사 가능 ... 하나하나 복사하는 것을 의미

console.log(array);
console.log(arrayCopy);
// 추가도 가능

const arrayCopy02 = [...array, {key : 'key03'}];
console.log(arrayCopy02);

obj1.key = 'newKey'; // 값이 전부 newKey 로 바뀜

const obj3 = {...obj1};
console.log(obj3);
// 오브젝트도 복사 가능

const name001 = ['kim','hong'];
const name002 = ['tom','jerry'];

const nameArr = [...name001, ...name002];
console.log(nameArr);
// 2 개의 배열을 합치는 것도 가능


const dog01 = {dog:'개'};
const dog02 = {dog:'강아지'};

const newDog = {...dog01, ...dog02};
console.log(newDog);
// 오브젝트도 가능 , 단 - 같은 키를 사용하면 뒤에 선언된 오브젝트가 앞의 오브젝트를 덮어씀



/** 04 Default Parameters
 * 
 *  아무 정보가 없으면 undefined 가 출력 되지만 default 값을 주고싶으면 더 간단히 부여 가능 
 * 
 */


// 원래 default 값을 부여할때
function printMessage (message){
    if(message==null){
        message = 'default message!';
    }
    console.log(message);
}
printMessage();


// Default Parameters 를 이용한 방법
function printMessage02(message = 'default meessage 임!'){
    console.log(message);
}

printMessage02('hi !');
printMessage02();

/** 05 Ternary Operator
 *  삼항연산자
 */

const isCat = true;

let component = isCat ? 'cat' : 'dog';
console.log(component);



/** 06 Template Literals
 * 
 *  
 */

