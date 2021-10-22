/** 심볼 (Symbol)
 * 
 */


//property Key : 문자형
const obj = {
    1: '1입니다.',
    false : '거짓'
}

console.log(Object.keys(obj));

console.log(obj.false);
console.log(obj['1']);

// 문자로 접근


// Symbol 형으로도 접근 가능 - 심볼은 유일한 식별자이다.

const a = Symbol();
const b = Symbol();

console.log(a===b); // 동등연산자도 false 가 나옴 : 유일성 보장

const id = Symbol('id'); // 'id' 는 해당 심볼의 설명을 붙인거임
const id02 = Symbol('id'); // 설명이 똑같은 것을 만들어도 : 동등연산자로 찍어보면 false 가 나옴

console.log(id === id02);

// 심볼을 객체의 키로 사용

const user = {
    name : 'mike',
    age : 30,
    [id] : 'myid'
}

console.log(user); // myid 값이 잘 나옴
console.log(Object.keys(user)); // 그런데 keys 나 values, entries, for문을 이용하면 값이 나오지 않음
for(let a in user){
    console.log(a);// myid 값이 나오지 않음
}

// 숨겨진 값을 어디에 쓸 수 있을까? 원본 데이터는 건들지 않고 속성을 추가 할 수 있음 !

const userClean = {
    name : 'mike',
    age : 30
}

userClean[id] = 'myid in clean';
console.log(userClean);


// 전역 심볼 Symbol.for() : 하나의 심볼만 보장받음, 없으면 만들고 있으면 가져온다.
//                  Symbol 함수는 매번 다른 Symbol 값을 생성하지만, Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol 공유

const id_for = Symbol.for('id_test');
const id_for02 = Symbol.for('id_test');

console.log(id_for === id_for02); // 이건 for 을 사용해서 전역 심볼을 사용하기 때문에 같은 값을 저장한 것임.

//이름(설명)을 얻고싶으면 Symbol.keyFor()  을 사용하면 됌


console.log(Symbol.keyFor(id_for)); // 설명값인 id_test 가 리턴됌 > 단, 전역 심볼이 아니면 사용 불가

// 전역 심볼이 아니면 description 을 사용하면 됌.

console.log(Symbol.keyFor(id)); // 전역심볼이 아니라 undefined 가 나옴
console.log(id.description); // 해당 심볼에 .description 을 해주면 설명 값을 얻을 수 있음 


// Object.getOwnPropertySymbols() 를 사용하면 모든 심볼을 볼 수 있음 >>> () 안에 선언된 오브젝트 내의 심볼들
console.log(Object.getOwnPropertySymbols(user));

// Reflect.ownKeys()는 심볼을 포함한 모든 키 값을 보여줌 
console.log(Reflect.ownKeys(user));




// ----------------------------------------- 심볼 사용 예시 ------------------------------------------------------------

// 다른 개발자가 만들어 놓은 객체
const member = {
    name :"Mike",
    age : 30
};

// 내가 하는 작업

// member.shownName = function(){};
// 이런식으로 추가하면 His shownName is undefined 가 출력되어 버림..

const showName = Symbol('show name');
member[showName] = function(){
  console.log(this.name);  
};

// 이렇게 하면 심볼이기 때문에 사용자 메시지는 잘 출력 되고 내가 추가한 심볼은 출력 되지 않음 - 다른 사람의 코드에 영향을 주지 않음

member[showName](); // 내가 만든 것을 따로 사용하면  this.name 값을 출력해서 Mike 라고 잘 나옴  


// 사용자가 접속하면 보는 메시지
for(let key in member){
    console.log(`His ${key} is ${user[key]}`); // 템플릿 리터럴 (Template Literal)
}


/**
 * # 템플릿 리터럴(Template Literal)
 * ES6부터 새로 도입된 문자열 표기법이다.
 * 
 * 문자열 생성시 따옴표 대신, 백틱(`)을 사용한다.
 * var str_01 = `hello world`;
 * 
 * 템플릿 리터럴의 기능
 * 
 * 1. 줄바꿈 표현 가능
 * 2. ${} 표현식 삽입 가능
 * 
 */