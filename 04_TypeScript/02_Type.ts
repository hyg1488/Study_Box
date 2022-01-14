// 타입스크립트 타입 심화

/** 01. 제너릭 */
/**************************************************************************************************************************************** */
function getFirstElem(arr: string[]): string;
function getFirstElem(arr: number[]): number;
function getFirstElem(arr: any) : any{  // any로 받고 any로 리턴하면 타입정보를 모두 잃게 되므로 좋은 방법이 아님
  if (!Array.isArray(arr)) {
    throw new Error('getFirstElemOrNull: Argument is not array!');
  }
  if (arr.length === 0) {
    throw new Error('getFirstElemOrNull: Argument is an empty array!');
  } 
  return arr[0] ? arr[0] : null;
}

getFirstElem([123,1234,21241]);

// 어떤 값이 들어올지 몰라서 오버로딩을 통해 위 코드처럼 만들어야 하는 상황..
// 원하는 것 : 여러 타입에 대해 동작하는 함수를 정의, 해당 함수를 정의할 때는 알수 없지만 사용할때만 알 수 있는 타입 정보를 사용하고 싶다.

// 01-1 타입 변수

/**                     함수                    제너릭
 * 정의 시점      매개변수 a : number         타입 변수 <T>   - <T> Type , <E> Element , <K> Key , <V> Value , <N> Number
 * 정의 예시      function(a:number){}        type MyArray <T> = T[]
 * 사용 시        실제 값 사용(1,43 등)       실제 타입 사용 (number, string 등) 
 * 사용 예시      a(3); a(42);                type MyNumberArray = MyArray<number>
 */


// 01-2 제너릭 함수  : function getFirstElem02<T>(arr:T[]) :T{
// function 함수명
function getFirstElem02<T>(arr:T[]) :T{
    
    return arr[0];
}

console.log(getFirstElem02([123,123123,124214]));

// 02. 유니온 타입  : function square03(value: number, returnString: boolean = false): string | number {
/**************************************************************************************************************************************** */

function square(value: number, returnString: boolean = false): any {
    const squared = value * value;
    if (returnString) {
      return squared.toString();
    }
    return squared;
}

// 위 코드 처럼 숫자, 불리언 타입을 하나씩 받아 그 값에 따라서 string / number 타입을 반환한다.
// 인자의 타입이 아닌 값에 의존하는 반환 타입을 어떻게 표현 해야 할까..

var randomNumber = 123;
var randomBoolean = true;
var value = 123;
function square02(value: number, returnString: boolean): number;
function square02(value: number, returnString: boolean): string;
function square02(value: number, returnString: boolean = false) {
    const squared = value * value;
    if (returnString) {
      return squared.toString();
    }
    return squared;
}
const mystery: any = square(randomNumber, randomBoolean);

// 2번 코드 처럼 오버로딩을 사용하면 표현은 가능은 하지만 비효율 적이고 반환값을 할당하는 변수의 타입을 정의하기 어렵다 (any 는 제너릭과 똑같은 문제로 사용 x)

// 해답 : 파이프(|) 기호를 통한 표현

function square03(value: number, returnString: boolean = false): string | number {
    const squared = value * value;
    if (returnString) {
      return squared.toString();
    }
    return squared;
}

// 여러줄 표현 가능
type ever = string | number | boolean;


// 03. 인터섹션 타입 :  type BeerLovingProgrammer = programmer & BeerLover;
/**************************************************************************************************************************************** */

// 프로그래머 객체
type programmer = {favoriteLanguage : string};
const Programmer : programmer = {favoriteLanguage : 'Typescript'};

// 맥주 객체
type BeerLover = { favoriteBeer: string };
const beerLover: BeerLover = { favoriteBeer: 'Imperial Stout' };

// 맥주 & 프로그래머 => 앰퍼샌드 (&) 기호를 사용
type BeerLovingProgrammer = programmer & BeerLover;
const BLP : BeerLovingProgrammer = { 
    favoriteLanguage: 'TypeScript',
    favoriteBeer: 'Imperial Stout',
  };
console.log(BLP);


// 04. 열거형 :
/**************************************************************************************************************************************** */
// 초기화 하지 않는 경우 0부터 카운터
enum Direction {
    East,
    West,
    South,
    North
};

console.log(Direction.East);

// 만약 초기화 되지 않은 멤버가 섞여있다면, 그 멤버의 값은 이전에 초기화된 멤버의 값으로부터 순차적으로 증가해서 결정된다.
enum InitializedDirection {
    East = 2,
    West,
    South = 8,
    North = 16
};

console.log(InitializedDirection.West);

// 문자 열거형 : 순차증가 x 모든 멤버 명시적으로 초기화 필요
enum StringEnum {
    East = 'EAST',
    West = 'West'
}

console.log(StringEnum);