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

$("#sel2").change(function(){
	var str = $(this).val();
	if(str == "남자") {
		alert("남자 입니다.");
	}
	else if(str == "여자") {
		alert("여자 입니다.");
	}
	else {
		alert("당신은 신고대상입니다.");
	}
});

$("#btReset2").click(function(){
	$("#sel2")[0].selectedIndex = 0;
});

$("#sel3").change(function(){
	var str = $(this).val();
	switch(str) {
		case "남자":
			alert("당신은 남자입니다.");
			break;
		case "여자":
			alert("당신은 여자입니다.");
			break;
		default:
			alert("당신은 외계인 입니다.");
			break;
	}
});

$("#btReset3").click(function(){
	$("#sel3")[0].selectedIndex = 0;
});

/*
1. 순수 JS모델을 jQuery로 바꾸기 => $(jsModel)
2. jQuery모델을 순수JS모델로 바꾸기 => jQueryModel[0]
*/
var dom = document.querySelector("#sel2"); // 순수 JS모델
var dom2 = $("#sel2"); // jQuery모델
console.log(	dom.value	);
console.log(	dom2.val()	);
console.log(	$(dom).val()	);
console.log(	dom2[0].value	);