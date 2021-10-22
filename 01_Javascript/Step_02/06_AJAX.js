/** AJAX - XML, JSON 등 데이터 파일 불러오기
 * 
 * 
 */

// 01. Object to JSON
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banna']); 
console.log(json); // ["apple","banna"] json 의 규격

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () =>{
        console.log(`${this.name} can jump !`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); // 함수는 오브젝트 데이터가 아니기 때문에 제외, JS 자체의 심볼 또한 포함 x

json = JSON.stringify(rabbit, ['name']); // 이름만 포함시켜서 전송
console.log(json); 

json = JSON.stringify(rabbit, (key, value)=>{
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'Tom' : value; // 이렇게 통제도 가능
    //return value;   // key : , value : [object Object] 가 맨 먼저 나감
});
console.log(json); 

// 02. JSON to Object
// parse(json)

console.log("------------------------");
console.log("------------------------------------------------------------");

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

// obj 는 함수를 포함하고 있지 않기때문에
// obj.jump() 는 실행 불가.

// birthDate 도 String 으로 부여 되었기 때문에 주의
