const a = "바뀔수 없는 const";
let b = "바꿀수 있는 let";

const calculator = {
  add : function(a,b){
    return a+b;
  },
  minus: function(a,b){
    return a-b;
  },
  times: function(a,b){
    return a*b;
  },
  divide: function(a,b){
    return a/b;
  },
  power: function(a,b){
    return a**b;
  }
}

console.log(calculator.add(1,2));
console.log(calculator.power(2,2));
let check = true;

// isNaN(값) => 해당 값이 숫자인지 아닌지 판별 
while(check){
  const age = parseInt(prompt("How old are you ? "));

  if(isNaN(age)){
    alert("숫자를 입력하세요 !");
  }else{
    if(age < 12){
      alert("당신의 나이는 12 살 미만");
    }else if(age >= 12){
      alert("당신의 나이는 12 살 이상")
    }
    check = false;
  }
}

// == 는 값만 비교 === 은 유형도 비교한다.
// 0 == false 에서 false 의 default 는 0 이므로 0 == 0 으로 인식해 true 가 나온다.
console.log(0 == false);
// 0 === false 에서 false 는 boolean 이기 때문에 유형도 비교해 number 0 과 다르다고 인식함.
console.log(0 === false);

