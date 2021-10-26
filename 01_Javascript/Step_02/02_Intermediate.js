/** 생성자 함수 (Intermediate Class)
 *
 * 객체 리터럴 : 객체를 만드는 것
 * 
 * 생성자 함수 : 자바의 생성자와 비슷함
 * 
 */


// 생성자 함수 - 첫글자를 대문자로 함
function User(name, age){
    // this = {} 를 만듬
    this.name = name;
    this.age = age; // this 값을 넣고
    // return this - 이동작으로 알고리즘이 동작함
}

// 자바의 생성자와 비슷함
let user1 = new User('mike',20);
let user2 = new User('jane',30);
let user3 = new User('tom',40);
let user4 = new User('walker',50);

console.log(user1);
console.log(user2);



// 동작 원리
/**
 * new 함수명 () 실행시
 * 
 * 빈객체를 만듬 (this = {})
 * 
 * 01. this 에 프로퍼티드를 추가하고 (name, age)
 * 
 * 02. this 를 반환함 (return this;)
 * 
 * 01 과 02 는 코드론 없지만 new 를 써서 생성자 함수 동작할때 수행함
 */


 function User02(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        return "hi ! I'm "+this.name;
    }
}

let user5 = new User02("hong", 32);

console.log(user5.sayName());


/** Object - methods / computed property
 *  
 *  Computed property : 계산된 프로퍼티      
 *                    ㄴ property는 해당 object의 특징입니다. 
 *                       property는 보통 데이터 구조와 연관된 속성을 나타냅니다. property에는 2가지 종류가 있습니다. 
 *                       프로퍼티는 object를 위해서 데이터를 저장한다.  메소드는 object가 요청 받을 수 있는 액션이다. 
 * 
 *  Object.assign() : 객체 복제
 *  Object.keys() : 키 배열 반환
 *  Object.values() : 값 배열 반환
 *  Object.entries() 키/값 배열로 반환
 *  Object.fromEntries() : 키/값 배열을 넣어서 객체로 만든다. (entries 의 반대)
 */


let a = 'age';

const user = {
    name : 'mike',
    [a] : 30 /** 01 . Computed property로  변수 a 값이 들어가서 처리됌  (계산된 프로퍼티)*/
}

console.log(user.age); // age 로 값을 뽑아도 a 를 age 로 넣어서 사용했기 때문에 정상 작동



const userClone = { // 객체가 아닌 객체가 위치한 주소 참조값이 들어감
    name : 'hong',
    age : 30
}

const cloneUser = userClone;    // 객체가 복사된듯 보이지만 참고값을 가져와 띄워 주는 것임.
userClone.name = "ll"
console.log(cloneUser.name);    // 그래서 복사를 하고 객체의 이름을 바꿨는데 복사된 변수의 name 값도 바뀜


const newUser = Object.assign({}, user);
newUser.name = 'Son';
userClone.name = 'hong';
console.log(newUser.name);      /** 02 . Object.assign() 을 사용해야 객체를 복사함 */


// 여러 객체를 다중으로 복사해서 넣는것도 가능
const men = {
    name : 'hong',
    type : 'human'
}

const info01 = {
    age : 30
}

const info02 = {
    gender : 'male'
}

const isHe = Object.assign(men,info01,info02);
console.log(isHe.name);
console.log(isHe.age);
console.log(isHe.gender, isHe.type);

// Object.keys() 객체의 모든 key 값을 배열로 반환해준다.
console.log(Object.keys(isHe));

// Object.values() : 객체의 모든 값을 배열로 반환해준다.
console.log(Object.values(isHe));

// Object.entries() 키/ 값 모두 배열로 반환
console.log(Object.entries(isHe));

// Object.fromEntries() : 키/값 배열을 넣어서 객체로 만든다. (entries 의 반대)
const arr = [
    ["name","arr_mike"],
    ["age",30],
    ["gender","arr_male"]
];

console.log(Object.fromEntries(arr));
/** ------------------------- For HTML Space ------------------------------------ */

const test1 = document.querySelector(".test01");
const test2 = document.querySelector(".test02");
const test3 = document.querySelector(".test03");

test1.innerHTML = "/** Object - methods / computed property <br>  *  Computed property : 계산된 프로퍼티<br>*  Object.assign() : 객체 복제<br>*  Object.keys() : 키 배열 반환<br>*  Object.values() : 값 배열 반환<br>*  Object.entries() 키/값 배열로 반환<br>*  Object.fromEntries() : 키/값 배열을 넣어서 객체로 만든다. (entries 의 반대)<br>";
test2.innerHTML = "<br><br>user2.age : "+user2.age;
test3.innerHTML = user5.sayName();

