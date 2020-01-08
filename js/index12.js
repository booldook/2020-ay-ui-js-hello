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



