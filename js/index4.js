/*
Math 객체에서 가장 많이쓰는 4형제
Math.random() - 0 ~ 1보다 작은 난수 발생 (0 ~ 0.999999999999)
Math.round(5.4) => 5 - 반올림
Math.round(5.6) => 6 - 반올림
Math.ceil(5.4) => 6 - 무조건 올림
Math.ceil(5.9) => 6 - 무조건 올림
Math.floor(5.9) => 5 - 무조건 버림
Math.floor(5.4) => 5 - 무조건 버림
*/

var a = 'D';
console.log('ABC'+a+'EF');
console.log('<div style="'+a+'"></div>');

$("#btMake").click(boxMaker);
$("#btReset").click(boxRemover);

function boxMaker() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	$(".stage").append('<div style="background-color:rgb('+r+','+g+','+b+')"class="box" ></div>');
}
function boxRemover() {
	$(".stage").empty();
}




