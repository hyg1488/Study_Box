/**
 * proto 프로토타입으로 상속받아 사용
 * 
 */

const car = {
    wheels : 4,
    drive(){
        console.log("drive !");
    }
};

const bmw = {
    color : 'red',
};

//__proto__ 상속
bmw.__proto__ = car;

bmw.drive();


// class : ES6에 추가된 스펙
// 객체 생성은 동일
// constructor 을 통해 객체를 생성

class User02 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}

const tom = new User02("Tom", 29);

// class 는 new 를 빼고 실행시 문제 발생

tom.showName();

let n = tom.name;
console.log(n);