console.log("안녕하세요."+" 반갑습니다."); //안녕하세요. 반갑습니다.
console.log(123+123); //246
console.log("123"+"123");	//123123
console.log(123+123+"123");	//246123
console.log("123"+123+123);	//123123123
console.log("123"+(123+123));	//123246
console.clear(); // 현재 콘솔창의 결과를 지운다.

$("#bt1").click(function(){
	window.alert("아이디가 존재하지 않습니다.");
	alert("패스워드가 올바르지 않습니다."); //window. 은 생략 가능
});

console.log(	document.querySelector("#bt1")	);	//JS객체 가져오기
console.log(	$("#bt1")	); // jQuery객체 가져오기

$("#bt2").click(function(){
	console.log(prompt("숫자를 넣어주세요."));
});

//함수선언문
function hap(a, b) {
	return a + b;
}

console.log(hap(3, 5));

//변수
var a = 5;
var b;
console.log(a);
console.log(b);
console.log(hap);