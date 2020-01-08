// primitive type
var a = 10;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
a = 20;
console.log("a: " + a);
console.log("b: " + b);

//reference type
var c = {
	x: 10,
	y: 20
};
var d = c;
console.log(c);
console.log(d);
d.x = 50;
d.y = 30;
console.log(c);
console.log(d);
var e = [1, 2, 3, 4, 5];
var f = e;
console.log(e);
console.log(f);
f[3] = 30;
console.log(e);
console.log(f);


// 함수
// 1. 함수선언문
fn();
function fn() {
	console.log("선언된 함수");
}

// 2. 함수표현식
var fn2 = function() {
	console.log("표현된 함수");
}
fn2();

// 3. 함수의 이해
function fn3() {
	console.log("FN3");
}


// 4. 조건(제어)문
$(".circle").addClass("a");
$(".circle").removeClass("a");
// $(대상객체).hasClass(클래스명) : 대상객체가 클래스를 가지고 있으면 true를 가지고 있지 않으면 false를 리턴한다.
console.log($(".circle").hasClass("ab"));

$("#bt1").click(function(){
	$(".circle").toggleClass("blue");
	/*
	if(	$(".circle").hasClass("blue")	) {
		$(".circle").removeClass("blue");
	}
	else {
		$(".circle").addClass("blue");
	}
	*/
});

// 4. 조건(제어문) 심화

// 1번
if("조건") {

}

// 2번
if("조건") {

}
else {

}

// 3번 - 다중조건
if("조건1") {

}
else if("조건2") {

}
else if("조건3") {

}
else {

}

// 3번과 유사한 조건문 switch
var val =  "A" //"A" or "B" or "C" or ...;
switch(val) {
	case "A" :
		// "A"일때 할일
		break;
	case "B" :
		// "B"일때 할일
		break;
	case "C" :
		// "C"일때 할일
		break;
	default:
		// "A", "B", "C" 전부 아닐때
		break;
}

/*
1. 조건이 두개 이상일 때
	
	a. AND(&&) - 논리곱 - 그리고로 읽어라.
		A        B        Result
		true     true     true
		true     false    false
		false    true     false
		false    false    false

	b. OR(||) - 논리합 - 또는으로 읽어라.
		A        B        Result
		true     true     true
		true     false    true
		false    true     true
		false    false    false

*/

// 회원로그인 구현: 논리곱(AND) 예제
var user = [
	{userid: 'booldook', pw: '1234', name: '불뚝'},
	{userid: 'hongkd', pw: '12345', name: '홍길동'},
	{userid: 'hongks', pw: '12346', name: '홍길순'},
];

var userid = 'booldook2';
var pw = '1235';
if(userid == 'booldook') {
	if(pw == '1234') {
		alert("불뚝 회원님 안녕하세요");
	}
	else {
		alert("패스워드가 틀렸습니다.");
	}
}
else {
	alert("회원이 아닙니다.");
}

if(userid == 'booldook' && pw == '1234') {
	alert("불뚝 회원님 안녕하세요.");
}
else {
	alert("아이디와 패스워드를 확인해 주세요.");
}


// 클래스 찾기: 논리합(OR) 예제
var cars = [
	{id: 1, name: "소나타", price: 2500},
	{id: 2, name: "K5", price: 2800},
	{id: 3, name: "코란도", price: 3200},
];

var searchCar = "코란도"; // "소나타" or "코란도"

if(searchCar == "소나타" || searchCar == "코란도") {
	alert("원하시는 차를 찾았습니다.");
}
else {
	alert("결과가 없습니다.");
}

// 4. 반복문 (for)
for(var i=0; i<10; i++) {
	
}
