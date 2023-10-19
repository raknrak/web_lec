console.log("객체 속성 값 변경");
const person1 ={    
    name:"Hong Gildong"    
}
person1.name = "kim";
console.log(person1.name);
console.log(`------------------`);

console.log("객체 속성 추가 및 삭제");
const person2 = {}
person2.name = {
    firstName: "Gildong",
    lastName: "Hong"
};
//delete person.name; // 주석 해제시 이름이 삭제되고 출력
person2.likes = ["apple", "samsung"];
person2.printHello = function(){
    return "hello";
}
console.log(person2);
console.log(`------------------`);




