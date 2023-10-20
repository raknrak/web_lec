'use strict'

console.log(`string`);

const pw ="124"
if(pw.length <4){
    console.log(`비밀번호는 최소 4자리 이상 입력해주세요.`);
    console.log(`string은 최소 글자 수나 최대 글자 수를 확인.`);
}
console.log(``);
console.log(`include`);
const email="test!naver.com";
if(email.includes("@")===false){
    console.log(`올바른 이메일 형식이 아닙니다.`);
    console.log(`include는 특정 문자열이 포함되어 있는지 확인가능`);
}
const email2 = "test!naver.com";
if(email.indexOf("@") === -1){ //여기 에러 왜?
    console.log(`올바른 이메일 형식이 아닙니다.`);
    console.log(`indexOf도 특정 문자열이 포함되어 있는지 확인가능`);
}
console.log(``);
console.log(`array_length_for`);
const arr=[10, 20, 30];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);    
}console.log(`Array는 객체 요소 개수(길이)를 구할 수 있음`);
console.log(``);
const arr2=[10, 20, 30, 40];
arr2.push(50);
console.log(arr2);
console.log(`배열 맨 뒤에 50추가`);
arr2.pop();
console.log(arr2);
console.log(`배열 맨 뒤에서 요소 추출`);
arr2.unshift(0);
console.log(arr2);
console.log(`배열 맨 앞에 요소 추가`);
arr2.shift();
console.log(arr2);
console.log(`배열 맨 앞 요소 추출`);
console.log(``);
const arr3=[10, 20, 30, 40];
arr3.forEach(function(a){
    console.log(a);
});
console.log(arr3);
console.log(`콜백함수인 function(v)를 호출하여 접근한 요소의 값을 출력`);
