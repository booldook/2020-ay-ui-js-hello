if(true) {
	console.log("true");
}

if(false) {
	console.log("false");
}

if(0) {
	console.log("0");
}

if(1) {
	console.log("1");
}

if(5<3) {
	console.log("5<3");
}

if(5>3) {
	console.log("5>3");
}

// == 모양만 같으면 참
if(3=="3") {
	console.log("3=='3'");
}

// === 모양도 같고 타입(숫자, 문자)도 같아야 참
if(3==="3") {
	console.log("3==='3'");
}
if(3===3) {
	console.log("3===3");
}

// 0이외의 모든 문자, 숫자가 들어가면 참
if("booldook") {
	console.log("booldook");
}

/*
1. Javascript의 변수형(type)은 두가지로 나누어진다.
- primitive(원시) / reference(참조)
2. primitive : 
- Number(숫자), String(문자), Boolean(true, false), null, undefined
3. reference :
- Object(객체), Array(배열)
4. 변수를 선언하지 않으면 에러가 난다. -error
5. 변수를 선언만 해놓으면 undefined가 지정된다. - false
6. 변수에 null을 대입하면 빈 값이 된다. - false
*/
if(undefined) {
	// 지정되지 않음
	console.log("undefined");
}

if(null) {
	// 비어있음
	console.log("null");
}

var a = null;
console.log(a);
if(a) {
	console.log("변수 a");
}

console.clear();

// ----------------------------------

// +, -, *, /, %(mod)
// 5/2 -> 2.xxxxxxx;
// 5%2 -> 1
// 6%2 -> 0
$("#bt1").click(function(){
	var n = $("#in1").val(); // ""
	if(n == "") {
		alert("값을 입력하세요.");
		$("#in1").focus();
	}
	else if(n%2) {
		alert("홀수입니다.");
	}
	else {
		alert("짝수입니다.");
	}
});
$("#btReset1").click(function(){
	$("#in1").val("");
	$("#in1").focus();
});