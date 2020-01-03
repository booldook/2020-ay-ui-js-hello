/*
1. $() - 인자로 문자열(css표기법)을 주면 html의 객체(DOM)을 가져온다.
2. addClass() - 인자를 문자열로 클래스명을 주면 클래스가 적용된다.
3. removeClass() - 인자를 문자열로 클래스명을 주면 클래스가 삭제된다.
4. click() - 인자로 함수를 주면, 클릭했을 때 함수를 실행한다.
5. function 이름() {} - 기명함수
6. function() {} - 무명함수
*/

$("#btMove").click(moving);
$("#btReset").click(reset);

function moving() {
	$(".box").removeClass("ani-reset");
	$(".box").addClass("ani");
}

function reset() {
	$(".box").removeClass("ani").addClass("ani-reset");
}