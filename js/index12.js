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


// 조건(제어)문
$(".circle").addClass("a");
$(".circle").removeClass("a");
// $(대상객체).hasClass(클래스명) : 대상객체가 클래스를 가지고 있으면 true를 가지고 있지 않으면 false를 리턴한다.
console.log($(".circle").hasClass("ab"));

$("#bt1").click(function(){
	if(	$(".circle").hasClass("blue")	) {
		$(".circle").removeClass("blue");
	}
	else {
		$(".circle").addClass("blue");
	}
});


