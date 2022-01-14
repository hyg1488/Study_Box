// 인터페이스 , 클래스 

/**
* 인터페이스(interface)를 통해 값이 따라야 할 제약을 타입으로 표현 할 수 있다.
* 인터페이스 타입을 통해 값의 형태(shape)를, 즉 값이 어떤 멤버를 가져야 하고 각 멤버의 타입은 어때야 하는지를 서술할 수 있다.
* 
* 클래스(class)를 이용해 객체 지향 프로그래밍 언어와 비슷한 방식으로 코드를 구조화 할 수 있다. 
* 타입스크립트의 클래스는 ES6에 추가된 클래스 문법의 확장으로, 접근 제어자 등의 유용한 추가 기능을 제공한다.
* 
*/

interface User {    
    name: string;
    readonly height : number;
    favoriteLanguage ?: string;
    action : Function;
}

const author : User = {name : '홍길동', height : 123, action : function walk(params:string) {
    console.log(params+" 와 함께 걷는다.");
}};

author.action('토끼');

