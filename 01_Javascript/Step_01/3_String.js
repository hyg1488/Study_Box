// 문자열 길이 : str.length      문자열 붙이기 : str.concat(str2)  또는 str+str2
var str = "안녕하세요";
var str2 = " Kim 입니다!";
console.log("str = "+str);
console.log(str.length);
console.log(str.concat(str2));

// 특정 위치의 문자열 알아내기 - 첫 문자 : str.charAt(0)  , 마지막 문자 : str.charAt(str.length-1)
// 또는 [] 대괄호 사용 - 첫 문자 : str[0], str[str.length-1]

console.log(str.charAt(0));
console.log(str[0]);
console.log(str[str.length-1]);

// 부분 문자열 구하기 : .substring(시작 번호, 끝 번호);  or  .substr(시작 번호, 끝 번호);
console.log("부분 문자열 : ", str.substring(1,3));

console.log(str.substr(0,4));

// split 함수 : 문자열을 구분자로 나누어서 각각을 담은 배열을 변환.

var str_split_test = "1,2,3,4,5";
var str_split_answer = str_split_test.split(",");
console.log(str_split_answer);


