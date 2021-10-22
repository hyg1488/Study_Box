/**
 * 클로저 (Closure) : 함수와 렉시컬 환경의 조합, 함수가 생성될 당시 외부 변수를 기억, 생성된 후에도 계속 접근 가능
 * 
 */


// 어휘적 환경 (Lexical Environment)
// 처음 코드가 실행되면 변수들이 Lexical 환경으로 올라감 
//one : 초기화 x 사용불가      
// addOne : function 사용가능

let one; // undefined
one = 1; // 1 설정

function addOne(num){
    console.log(one+num);       // 전역 Lexical 환경  = > one : 1 , addOne : function
}

addOne(5); //     내부 Lexical 환경  = >  num : 5
// 내부에서 먼저 찾음 num 은 찾지만 one 이 없으니 외부(전역) Lexical 환경으로 넘어가서 찾음

// 클로저 더 깊게 공부하기...


// setTimeOut : 일정시간 후 함수 실행

// setInterval : 일정시간 함수를 반복


// setTimeout(fn, 3000);

setTimeout(function(){
    console.log("3sec !")
},3000);

// 주의사항 0으로 줘도 0초후 실행 아님, 이유는 stack 에서 밀리고 모든 stack 코드가 실행된 후 실행댐
cnt = 0;
setInterval(function(){
    if(cnt <6){
        console.log("2초 지났엉 !");
        cnt++;
    }    
}, 2000);


// call, apply, bind  - 함수 호출 방식과 관계없이 this 를 지정 할 수 있음

// call 모든 함수에서 사용할 수 있으며 this 를 특정값으로 지정할 수 있음

const mike = {
    name: "Mike",
}

function showThisName(birthYear, option){
    this.birthYear = birthYear;
    this.option = option;
}

showThisName(); // window 의 this 를 사용한거라 "" 이 나옴
showThisName.call(mike, 1995, "test"); // this 로 사용될 값 , 안에 들어가는 매개변수 


// apply 는 함수 매개변수를 처리하는 방법을 제외하면  call 과 완전히 같음
// call 은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply 는 매개 변수를 배열로 받습니다.


const nums = [3,10,1,5,6];

const minNum = Math.min.apply(null, nums);
//                             null, [3,10,1,5,6]
//                             null, 3, 10, 1, 5, 6
console.log(minNum);

// call 은 매개변수를 순서대로 직접 받고

// apply 는 배열 형태로 받음


// bind 를 사용하면 함수의 this 값을 영구히 바꿀 수 있다.



const updeatMike = showThisName.bind(mike);
updeatMike(1980, "totm");
console.log(mike);


// ------ 실용


const user = {
    name : "Mike",
    showName : function(){
        console.log(`hello , ${this.name}`);
    },
};

user.showName();


// 이런 코드가 있다.

// call 사용
let fn = user.showName;

fn(); // this 를 잃어버려 호출하니까 이름이 안나옴

fn.call(user); // call 로 this 값을 지정
fn.apply(user); // apply 도 마찬가지


// bind 사용
let userBind = fn.bind(user);
userBind();


